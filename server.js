// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes

const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const tempcors = require('cors');
app.use(tempcors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
// 
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
app.get ('/all', sendData);

function sendData (req, res){

res.send(projectData)


}

app.post('/add', addData);

function addData(req, res){
console.log (req.body);
projectData = {
data: req.body.data,
temp : req.body.temp,
content: req.body.content

}
res.send(projectData)
}