
var express = require('express');
var ip = require("ip");
var app = express();
var PORT = 3000;
 
app.get('/', (req, res) => {
  res.send("IP :" +ip.address() ) ;
})

app.get('/title', (req, res) => {
  res.send("Test Code") ;
})


app.get('/employees', (req, res) => {
  res.send(dsdsdsd) ;
})




 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
