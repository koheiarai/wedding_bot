// // Defining the libraries
// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const PORT = 3000;
// const IP = "localhost";

// // Move to config file
// let campgrounds = [
//   {name: "Pomsky", image: "http://www.pomsky.org/wp-content/uploads/2013/03/f14629e88cfe11e28ef622000a1fa434_7.jpg"},
//   {name: "Cute Dog", image: "https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg"},
//   {name: "Cute Dog", image: "https://static.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg"},
//   {name: "Cute Dog", image: "https://static.pexels.com/photos/406014/pexels-photo-406014.jpeg"}
// ]

// // Setting view engines
// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({extended: true}));

// // Welcome campgroundsMessage
// app.get("/", function(req, res){
//   res.render("landing");
// });

// // Get the result of compounds
// app.get("/campgrounds", function(req, res){
//   res.render("campgrounds", {campgrounds: campgrounds});
// });

// // Getting the score of an image
// app.post("/campgrounds", function(req, res){
//   const name = req.body.name;
//   const image = req.body.image;
//     // const score = Math.floor(Math.random() * 100) + " points";
//   const score = _delegateAi(req);
//   const newCampground = {name: name, image: image, score: score};
//   campgrounds.push(newCampground);
//   res.redirect("/campgrounds");
// });

// // Page to create a new page
// app.get("/campgrounds/new", function(req, res){
//   res.render("new.ejs");
// });

// // Defining the port number and IP address
// app.listen(PORT, IP, function(){
//   console.log("Server has started!")
// });

// // Have a function of each AI depending on the input.
// // Move to another file and that file is referred to as the master logic file.
// // ToDo: Allow line app to send an image to the web application
// const _delegateAi = function(req) {
//   let res = "";
//   switch(req.body.option){
//     case "1":
//       // res = "One!";
//       res = Math.floor(Math.random() * 100) + " points";
//       break;
//     case "2":
//       // res = "Two!";
//       res = Math.floor(Math.random() * 100) + " points";
//       break;
//     case "3":
//       // res = "Three!";
//       res = Math.floor(Math.random() * 100) + " points";
//       break;
//     case "4":
//       // res = "Four!";
//       res = Math.floor(Math.random() * 100) + " points";
//       break;
//     case "5":
//       // res = "Five!";
//       res = Math.floor(Math.random() * 100) + " points";
//       break;
//   }
//   return res
// }

var express        = require( 'express' );
var http           = require( 'http' );

var app            = express();
app.set( 'port', process.env.PORT || 3001 );
app.get('/', function (req, res) {
    res.send('Hello World');
});

http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});