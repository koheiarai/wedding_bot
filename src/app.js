'use strict';

global.__base = __dirname + '/';


// Defining the libraries
const fs = require('fs');
const express = require("express");
const app = express();
const path = require('path');
const wrap = require('co-express');
const line = require('@line/bot-sdk');
const async = require('async');
const extend = require('extend');
const request = require('request');
const bodyParser = require("body-parser");
const uuid = require('node-uuid');

// Redis
// const redis = require('redis');
// const redisClient = redis.createClient();

// AWS
const AWS = require('aws-sdk')

// Http request
// const _request = require('../lib/http/send-request');

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
// ToDo: Move to config file
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
// here write a function to change the message and API
// ToDo: Move to DB
const _delegateAi = function(message) {
  let res = "";
  switch(message) {
    case "笑顔":
      // res = "One!";
      // res = Math.floor(Math.random() * 100) + " points";
      CAMERA.template.title = "①笑顔";
      CAMERA.template.text = "素敵な笑顔を撮影して送ってください！";
      res = CAMERA;
      break;
    case "猫顔":
      // res = "Two!";
      // res = Math.floor(Math.random() * 100) + " points";
      CAMERA.template.title = "②猫顔";
      CAMERA.template.text = "新婦は大の猫好きって知ってました？猫顔を撮影して送ってください！";
      res = CAMERA;
      break;
    case "サンシャイン顔":
      // res = "Three!";
      // res = Math.floor(Math.random() * 100) + " points";
      CAMERA.template.title = "③サンシャイン顔";
      CAMERA.template.text = "イェーイ！最高のサンシャイン顔を撮影して送ってください！";
      res = CAMERA;
      break;
    case "夫婦ポーズ":
      // res = "Four!";
      // res = Math.floor(Math.random() * 100) + " points";
      CAMERA.template.title = "④夫婦ポーズ";
      CAMERA.template.text = "夫婦ポーズ！仲良しポーズを撮影して送ってください！";
      res = CAMERA;
      break;
    case "晋太ポーズ":
      // res = "Five!";
      // res = Math.floor(Math.random() * 100) + " points";
      CAMERA.template.title = "⑤晋太さんポーズ";
      CAMERA.template.text = "晋太さんポーズ！ポーズをできるだけ似せてください！";
      res = CAMERA;
      break;
    case "奈々ポーズ":
      // res = "Five!";
      // res = Math.floor(Math.random() * 100) + " points";
      CAMERA.template.title = "⑥奈々さんポーズ";
      CAMERA.template.text = "奈々さんポーズ！キレキレのダンスポーズを撮影して送ってください！";
      res = CAMERA;
      break;
    default:
      res = { type: 'text', text: `「${message}」ではなくて画像を送ってください。By新婦` };
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
        console.log(__dirname);
        yield handleEvent(req["body"]["events"]["0"]);
    } catch (e) {
        console.log(`${e.stack}`)
    }
}));

// event handler
function *handleEvent(event) {
  if (event.type !== 'message' || (event.message.type !== 'text' && event.message.type !== 'image') ) {
    // ignore non-text-message event
    return Promise.resolve(null);
  }
  
  // Message ID
  console.log("messageId is:" + event.message.id);
  
  // create a text message
  let msg = _delegateAi(event.message.text)
  // let echo = { type: 'text', text: `「${event.message.text}」ではなくて画像を送ってください。By新婦` };
  
  // let echo = { type: 'text', text: msg };
  
  if (event.message.type === 'image') {
    let image = yield getImage(event.message.id);
    let name = yield getUserName(event);
    image = `data:image/png;base64, ${image.toString('base64')}`;
    const imageUrl = yield uploadImage(image);
    console.log("DEBUG imageUrl: " + imageUrl)
    let score = yield getFaceInfo(imageUrl);
    score = Math.floor(score * 100) + " points";
    // const score = Math.floor(Math.random() * 100) + " points";

    // Write a function to retrieve the name & image
    const newPhoto = {name: name, image: image, score: score};
    // Message ID

    photos.push(newPhoto);

    // Here write the function to change the reply depending on the score
    msg = { type: 'text', text: `Thank you for your image! Your score is ${score}!` };
  }
  
  // use reply API
  return client.replyMessage(event.replyToken, msg);
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
  const buffer = new Buffer(response.body);
  return buffer; // バイナリデータをreturn
}

// Get an user name from Line server
function *getUserName(event) {
  const user_id = event['source']['userId'];
  let options = {
    "url": "",
    "method": "GET",
    "headers": {
        "Authorization": ""
    }
  }
  const data = {
      'url': "https://api.line.me/v2/bot/profile/" + user_id,
      'headers': {
                  'Authorization': 'Bearer ' + defaultAccessToken
      },
      "json": true,
      'encoding': null
    };
  extend(true, options, data);

  const response = yield _request(options); // リクエスト
  return response.body.displayName;
}

// Http request
// function _request(options) {
//     const stack = (new Error().stack);
//     return new Promise((resolve, reject) => {
//         request(options, (error, response, body) => {
//             if (error) {
//                 reject(`${stack}\n${error.stack}\noptions: ${JSON.stringify(options)}\nbody: ${JSON.stringify(body)}`);
//                 return;
//             }
//             resolve(response); // リスポンスを返す
//         });
//     });
// }

// Move to another file
const CAMERA = {
    "type": "template",
    "altText": "this is a template",
    "template": {
        "type": "buttons",
        "title": "写真撮影",
        "text": "Please select",
        "actions": [
            {
              "type": "uri",
              "label": "写真を撮る",
              "uri": "line://nv/camera/"
            }
        ]
    }
  };
  
  // Get an user name from Line server
function *getFaceInfo(imageURL) {
  let options = {
    "url": "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceLandmarks=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
    "method": "POST",
    "headers": {
        "Authorization": ""
    },
    "body": {
      "url": ""
    }
  }
  const data = {
      'headers': {
        'Ocp-Apim-Subscription-Key': '3a414de09fdd49088ba4414e9641522f'
      },
      "body": {
        "url": "https://s3-ap-northeast-1.amazonaws.com/wedding.content/" + imageURL
      },
      "json": true
    };
  extend(true, options, data);

  console.log("JSON request: " + JSON.stringify(options));
  const response = yield _request(options); // リクエスト
  console.log("raw response: " + response);
  console.log("JSON response: " + JSON.stringify(response));
  return response["body"][0]["faceAttributes"]["smile"];
}

// AWS Part
function *uploadImage(base64) {
  AWS.config.update({ accessKeyId: "AKIAIHXOSLZMOJRH3UMA", secretAccessKey: "3+9psVbKuD0vUiotFkJwhrZ9plo2sJCU74Nq5Nlt" });

  // Create an s3 instance
  const s3 = new AWS.S3();

  // Ensure that you POST a base64 data to your server.
  // Let's assume the variable "base64" is one.
  const base64Data = new Buffer(base64.replace(/^data:image\/\w+;base64,/, ""), 'base64')

  // Getting the file type, ie: jpeg, png or gif
  const type = base64.split(';')[0].split('/')[1]

  // ToDo: Change to unique id so that the images are not overwritten
  const userId = uuid.v4();

  // With this setup, each time your user uploads an image, will be overwritten.
  // To prevent this, use a unique Key each time.
  // This won't be needed if they're uploading their avatar, hence the filename, userAvatar.js.
  const params = {
    Bucket: "wedding.content",
    Key: `${userId}.${type}`, // type is not required
    Body: base64Data,
    ACL: 'public-read',
    ContentEncoding: 'base64', // required
    ContentType: `image/${type}` // required. Notice the back ticks
  }

  // The upload() is used instead of putObject() as we'd need the location url and assign that to our user profile/database
  // see: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
  s3.upload(params, (err, data) => {
    if (err) { return console.log(err) }
    
    // Continue if no error
    // Save data.Location in your database
    console.log('Image successfully uploaded.');
  });
  
  // Return image url suffix
  return `${userId}.${type}`;

}