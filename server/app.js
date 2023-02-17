const express = require("express");
const app = express();
var axios = require('axios');
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Origin", "https://3000-csuwebdev-nasafrontend-hdgdlct877p.ws-us87.gitpod.io/");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

//https://group-project.onrender.com

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

