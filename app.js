/**
 * 为了便于理解，将所有Express代码写在本文件中
 * @2015-1-15 crated by http://chensd.com
 */

var express = require('express')
  , morgan = require('morgan')
  , fs = require('fs')
  , path = require('path')
  , multipart = require('connect-multiparty');

var app = express();
app.use(express.static('./public'));
app.use(morgan('dev'));

app.listen(process.env.PORT || 3000);

app.post('/upload', multipart(), function(req, res){
  //get filename
  var filename = req.files.files.originalFilename || path.basename(req.files.files.ws.path);
  //move file to a public directory
  var targetPath = path.dirname(__filename) + '/public/' + filename;
  //move file
  fs.createReadStream(req.files.files.ws.path).pipe(fs.createWriteStream(targetPath));
  //return file url
  res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});
});