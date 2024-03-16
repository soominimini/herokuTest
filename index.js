//index.js
var http = require('http');
var fs = require('fs');
var xlsx = require('xlsx');
var querystring = require('querystring');
var express = require('express');
var app = express();


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

 var  inx = 0;
 var  vid_pick = ["./1","./2","./3","./4","./5","./6","./7"];
    vid_pick = shuffle(vid_pick);

        const sourceHTML = fs.readFileSync(__dirname + "/PES.html", "utf8");
        let new_form = "<form id=\"myform\" method=\"post\" action=\""
          new_form = new_form+vid_pick[inx];
        new_form = new_form+"\">"

const replacedHTML = sourceHTML.replace("<form id=\"myform\" method=\"post\"  action=\"./1\" >", new_form);


            var sourceHTML_inter = fs.readFileSync(__dirname + "/Interactant.html", "utf8");
var new_form_inter = "<form id=\"myform\" method=\"post\" action=\""+vid_pick[inx]+"\">"

var replacedHTML_inter = sourceHTML_inter.replace("<form id=\"myform\" method=\"post\" action=\"./2\" >", new_form_inter);
sourceHTML_inter = replacedHTML_inter;







app.set('port', (process.env.PORT || 5000));
app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index.html");
})

app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});
