const express = require("express");
const app = express();
var axios = require('axios');
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
res.json({message: "NASA"});
});

app.listen(PORT,() => {
  console.log(`Server listening on ${PORT}`);

});

//Nasa API Key: mPR4K9KTmxTBtepFRlKkmGHaVyKHvTuo6NFsiKdp 