const express = require("express");
const app = express();
var axios = require('axios');
const PORT = process.env.PORT || 3001;

// app.get("/", function(req, res)  {
//   axios.get('https://api.nasa.gov/planetary/apod?'+ 'api_key=mPR4K9KTmxTBtepFRlKkmGHaVyKHvTuo6NFsiKdp' ).then(function(response){
//     res.render('apihtml.ejs', {data : response.data });
//   })
// });

app.get("/", function(req, res)  {
  axios.get('https://api.nasa.gov/planetary/apod?'+ 'api_key=mPR4K9KTmxTBtepFRlKkmGHaVyKHvTuo6NFsiKdp' ).then(function(response){
   res.send(JSON.stringify(response.data));
  })
});

app.listen(PORT,() => {
  console.log(`Server listening on ${PORT}`);
});
