var app = require('express').Router();
var empobj = require('./post');
app.get('/post',empobj.getAll);
app.post('/add',empobj.add);
// app.put('/update/:cid',cobj.update);
// app.delete('/delete/:cid',cobj.delete);
module.exports = app;