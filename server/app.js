const express = require("express");
const app = express();
var axios = require('axios');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const options = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 200
 }
  app.use(cors(options))



//https://group-project.onrender.com

// app.get("/", function(req, res)  {
//   axios.get('https://api.nasa.gov/planetary/apod?'+ 'api_key=mPR4K9KTmxTBtepFRlKkmGHaVyKHvTuo6NFsiKdp' ).then(function(response){
//     res.render('apihtml.ejs', {data : response.data });
//   })
// });

app.get("/", function(req, res)  {
  console.log('hit')
  axios.get('https://api.nasa.gov/planetary/apod?'+ 'api_key=mPR4K9KTmxTBtepFRlKkmGHaVyKHvTuo6NFsiKdp' ).then(function(response){
    res.status(200).json(JSON.stringify(response.data))
  })
});


app.listen(PORT,() => {
  console.log(`Server listening on ${PORT}`);
});

