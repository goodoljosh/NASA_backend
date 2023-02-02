var express = require("express");
var app = express();
var axios = require('axios');

app.get('/api', (req, res) => {
res.json({message: "NASA"});
});

app.listen(3000,function(){
  console.log('App listening on port 3000');

})