var app = require('express').Router();
var postroutes = require('../post/post.routes');
app.use('/post',postroutes);

module.exports=app;
