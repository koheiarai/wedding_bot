'use strict';

global.__base = __dirname + '/';


// Defining the libraries
const bodyParser = require("body-parser");
const express = require("express");
const request = require('request');
const extend = require('extend');
const line = require('@line/bot-sdk');
const wrap = require('co-express');
const path = require('path');
const async = require('async');
const app = express();
const fs = require('fs');

// IP & PORT
const PORT = 3000;
const IP = "localhost";

// Move to config file
let photos = [
  {name: "Pomsky", image: "http://www.pomsky.org/wp-content/uploads/2013/03/f14629e88cfe11e28ef622000a1fa434_7.jpg"},
  {name: "Cute Dog", image: "https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg"},
  {name: "Cute Dog", image: "https://static.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg"},
  {name: "Cute Dog", image: "https://static.pexels.com/photos/406014/pexels-photo-406014.jpeg"}
]

// Line config
// ToDo: Move to 
const defaultAccessToken = 'pY08L55FaKvaHFayaOdPDySWBMQgJ0m6TvhjWa/axFQksupY7VvxIyuKA4EZ5geFFq6IzwmGD/zJSGtQulaLwsv3z79Ek7gs0MXgbuPbEH62+qkQcjdhFyMm/GJR/pwB4RuXWvb0klGJbfSBxM2iAgdB04t89/1O/w1cDnyilFU=';
const defaultSecret = 'c71eb556eadc94d7e8bdeee14d9f08db';

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || defaultAccessToken,
  channelSecret: process.env.CHANNEL_SECRET || defaultSecret,
};


// Setting view engines
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({extended: true}));

// Welcome photosMessage
app.get("/", function(req, res){
  res.render("landing");
});

// Get the result of compounds
app.get("/photos", function(req, res){
  res.render("photos", {photos: photos});
});

// Getting the score of an image
app.post("/photos", function(req, res){
  const name = req.body.name;
  const image = req.body.image;
    // const score = Math.floor(Math.random() * 100) + " points";
  const score = _delegateAi(req);
  const newPhoto = {name: name, image: image, score: score};
  photos.push(newPhoto);
  res.redirect("/photos");
});

// Page to create a new page
app.get("/photos/new", function(req, res){
  res.render("new.ejs");
});

// Defining the port number and IP address
app.listen(process.env.PORT || PORT, function(){
  console.log("Server has started!")
});

// .listen(process.env.PORT || 5000)

// Have a function of each AI depending on the input.
// Move to another file and that file is referred to as the master logic file.
// ToDo: Allow line app to send an image to the web application
const _delegateAi = function(req) {
  let res = "";
  switch(req.body.option){
    case "1":
      // res = "One!";
      res = Math.floor(Math.random() * 100) + " points";
      break;
    case "2":
      // res = "Two!";
      res = Math.floor(Math.random() * 100) + " points";
      break;
    case "3":
      // res = "Three!";
      res = Math.floor(Math.random() * 100) + " points";
      break;
    case "4":
      // res = "Four!";
      res = Math.floor(Math.random() * 100) + " points";
      break;
    case "5":
      // res = "Five!";
      res = Math.floor(Math.random() * 100) + " points";
      break;
  }
  return res
}

// create LINE SDK client
// ToDo: move below to another file later
const client = new line.Client(config);

// register a webhook handler with middleware
// app.post('/webhook', line.middleware(config), (req, res) => {
//   Promise
//     .all(req.body.events.map(handleEvent))
//     .then((result) => res.json(result));
// });

// Webhook
app.post('/webhook', line.middleware(config), wrap(function*(req, res) {
    try {
        yield handleEvent(req["body"]["events"]["0"]);
    } catch (e) {
        console.log(`${e.stack}`)
    }
}));

// event handler
function *handleEvent(event) {
  // if (event.type !== 'message' || event.message.type !== 'text' || event.message.type !== 'image') {
  if (event.type !== 'message' || (event.message.type !== 'text' && event.message.type !== 'image') ) {
    // ignore non-text-message event
    return Promise.resolve(null);
  }
  
  // Message ID
  console.log("messageId is:" + event.message.id);
  
  // create a echoing text message
  let echo = { type: 'text', text: `「${event.message.text}」ではなくて画像を送ってください。By新婦` };
  if (event.message.type === 'image') {
    let image = yield getImage(event.message.id);
    const score = Math.floor(Math.random() * 100) + " points"

    // Write a function to retrieve the name & image
    image = `data:image/jpeg;base64,${image.toString('base64')}`;
    // const newPhoto = {name: "name", image: "https://static.pexels.com/photos/406014/pexels-photo-406014.jpeg", score: score};
    const newPhoto = {name: "name", image: image, score: score};
    // Message ID
    // console.log(`data:image/jpeg;base64,${image}`);
    
    photos.push(newPhoto);

    // Here write the function to change the reply depending on the score
    echo = { type: 'text', text: `Thank you for your image! Your score is ${score}!` };
  }
  
  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// Get an image from Line server
function *getImage(messageId) {
  let options = {
    "url": "",
    "method": "GET",
    "headers": {
        "Authorization": ""
    }
  }
  const data = {
      'url': "https://api.line.me/v2/bot/message/" + messageId + "/content",
      'headers': {
                  'Authorization': 'Bearer ' + defaultAccessToken
      },
      'encoding': null
    };
  extend(true, options, data);

  const response = yield _request(options); // リクエスト
  // response.validateStatusCodes(200);
  var buffer = new Buffer(JSON.stringify(response));
  // var buffer = JSON.stringify(response);
  return buffer; // バイナリデータをreturn
}

// Http request
function _request(options) {
    const stack = (new Error().stack);
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(`${stack}\n${error.stack}\noptions: ${JSON.stringify(options)}\nbody: ${JSON.stringify(body)}`);
                return;
            }
            resolve(JSON.stringify(response)); // リスポンスを返す
        });
    });
}