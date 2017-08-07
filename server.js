var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
      title: 'Article One|Gyaniswar Hajong',
      heading: 'Article One',
      date: 'August 4th 2017',
      content:`  <p>
                Hello.This is my article one.There is nothing much to say about it but it is getting fun.
            </p>`
    },
    'article-two' : {
        title: 'Article Two|Gyaniswar Hajong',
      heading: 'Article Two',
      date: 'August 5th 2017',
      content:`  <p>
                Hello.This is my article two.There is nothing much to say about it but it is getting fun.
            </p>`
    },
    'article-three' : {
        title: 'Article Three|Gyaniswar Hajong',
      heading: 'Article Three',
      date: 'August 6th 2017',
      content:`  <p>
                Hello.This is my article Three.There is nothing much to say about it but it is getting fun.
            </p>`
    }
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
            <meta name = "viewport" content = "width-device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class = "container">
                    <div class="center">
                        <img src="/ui/madi.png" class="img-medium"/>
                    </div>
                    <div>
                        <a href = "/">Home</a>
                        <hr>
                   </div>
                   <div>
                        <h3>
                            ${heading}
                        </h3>
                </div>
                <div>
                    ${date}
                </div>
                ${content}
        </div>
        </body>
        </html>
        
        `;
    return htmlTemplate;
}        
var counter = 0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [];
app.get('/submit-name',function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
var names = [];
app.get('/feedback',function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function (req, res) {
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',function (req,res) {
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
