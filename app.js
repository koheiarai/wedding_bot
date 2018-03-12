// Defining the libraries
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const IP = "localhost";
const line = require('@line/bot-sdk');

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
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: 'text', text: "`{event.message.text}`ではなくて画像を送ってください。By新婦" };
  

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}