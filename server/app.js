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
//Picture of the day API call
app.get("/npod", function(req, res)  {
  axios.get('https://api.nasa.gov/planetary/apod?'+ 'date=2022-01-25&' + 'api_key=mPR4K9KTmxTBtepFRlKkmGHaVyKHvTuo6NFsiKdp' ).then(function(response){
    res.status(200).json((response.data))
  })
});
//Mars Rover API call
app.get("/mars", function(req, res)  {
  const date = req.query.date
  axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + date + '&api_key=mPR4K9KTmxTBtepFRlKkmGHaVyKHvTuo6NFsiKdp' ).then(function(response){
    res.status(200).json((response.data))
  })
});

app.listen(PORT,() => {
  console.log(`Server listening on ${PORT}`);
});

