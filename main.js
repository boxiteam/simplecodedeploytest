
var express = require('express');
var ip = require("ip");
var app = express();
var PORT = 3000;
 
app.get('/', (req, res) => {
  res.send(ip.address() ) ;
})

app.get('/title', (req, res) => {
  res.send("Test Code") ;
})

app.post('/employees', (req, res) => {

  var employee  = 

    {
      id: 10, 
      name:"Ahmed"
    }   
  res.send(employee) ;
})


app.get('/employees', (req, res) => {

  var employees = [

    {
      id: 1, 
      name:"mohammed"
    } ,
    {
      id: 2, 
      name:"ahmed"
    }
  ]
  res.send(employees) ;
})




 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
