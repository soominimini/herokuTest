//index.js
var http = require('http');
var fs = require('fs');
var xlsx = require('xlsx');
var querystring = require('querystring');
var express = require('express');
var app = express();

var personal_id =0;
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

// app.listen(app.get('port'), function () {
//   console.log('App is running, server is listening on port ', app.get('port'));
// });



const dir = './data';

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index.html");
});
  app.post('/PES', function(req, res) {
    res.send(replacedHTML);
    // res.sendFile(sourceHTML);

    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());

        console.log(data);
        readWrite(data);


      });
    }
});
app.post(['/IOS'], function(req, res) {
    res.sendFile("C:/xampp/htdocs/srproject/node_modules/IOS.html");
    inx+=1;
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        // console.log(chunk.toString());
        var data = querystring.parse(chunk.toString());
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.end('ID : ' + data.gender + 'PW : ' + data.age);
        readWrite(data);
        console.log("inx:",inx);
        if(inx<7) {
      let new_form_inter2 = "<form id=\"myform\" method=\"post\" action=\""
          new_form_inter2 = new_form_inter2+vid_pick[inx];
        new_form_inter2 = new_form_inter2+"\">"
        replacedHTML_inter = sourceHTML_inter.replace(new_form_inter, new_form_inter2);
        sourceHTML_inter = replacedHTML_inter;
      new_form_inter = new_form_inter2;
    }
else{

   let new_form_inter2 = "<form id=\"myform\" method=\"post\" action=\"./lastPage\">"
      console.log("new_form_inter:",new_form_inter2);
        replacedHTML_inter = sourceHTML_inter.replace(new_form_inter, new_form_inter2);
        sourceHTML_inter = replacedHTML_inter;
      new_form_inter = new_form_inter2;
        }
      });
    }
});

app.post(['/Interact'], function(req, res) {

        res.send(replacedHTML_inter);
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        // console.log(chunk.toString());
        var data = querystring.parse(chunk.toString());
        console.log(data);
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.end('ID : ' + data.gender + 'PW : ' + data.age);
        readWrite(data);
      });
    }
});
  app.post(['/1'], function(req, res) {
    res.sendFile(__dirname + "/speech.html");
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());
        console.log(data);
        Object.assign(data, {vid_type: "speech"});
        readWrite_PES(data);
      });
    }
});
    app.post(['/2'], function(req, res) {
    res.sendFile(__dirname + "/emotion.html");
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());
        console.log(data);
        Object.assign(data, {vid_type: "emotion"});
        readWrite_PES(data);
      });
    }
});
app.post(['/3'], function(req, res) {
    res.sendFile(__dirname + "/gesture.html");
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());
        console.log(data);
        Object.assign(data, {vid_type: "gesture"});
        readWrite_PES(data);
      });
    }
});
  app.post(['/4'], function(req, res) {
    res.sendFile(__dirname + "/speech_emotion.html");
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());
        console.log(data);
        Object.assign(data, {vid_type: "speech_emotion"});
        readWrite_PES(data);
      });
    }
});
    app.post(['/5'], function(req, res) {
    res.sendFile(__dirname + "/speech_gesture.html");
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());
        console.log(data);
        Object.assign(data, {vid_type: "speech_gesture"});
        readWrite_PES(data);
      });
    }
});
app.post(['/6'], function(req, res) {
    res.sendFile(__dirname + "/emotion_gesture.html");
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());
        console.log(data);
        Object.assign(data, {vid_type: "emotion_gesture"});
        readWrite_PES(data);
      });
    }
});
app.post(['/7'], function(req, res) {
    res.sendFile(__dirname + "/speech_emotion_gesture.html");
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());
        console.log(data);
        Object.assign(data, {vid_type: "speech_emotion_gesture"});
        readWrite_PES(data);
      });
    }
});


app.post(['/lastPage'], function(req, res) {
    res.sendFile(__dirname + "/lastpage.html");
    if (req.method == 'POST') {
      req.on('data', function (chunk) {
        var data = querystring.parse(chunk.toString());
        console.log(data);
        readWrite_PES(data);
      });
    }
});

fs.readdir(dir, (err, files) => {
  console.log(files.length);
  personal_id = files.length;
  var stream = fs.createWriteStream(personal_id+".txt");
});
  function readWrite(input_data){
    fs.appendFileSync("data/"+personal_id+".txt",String(input_data.gender)+" "+ String(input_data.age)+"\n");
  }

    function readWrite_PES(input_data){
    fs.appendFileSync("data/"+personal_id+".txt",Object.values(input_data)+"\n");
  }
