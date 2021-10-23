// import * as fs from 'fs';
// import * as fs from 'fs/promises';
 
// import * as d3 from 'd3'

const express=require('express');  // importing express using require
const app = express(); //Creating an instance of express
const fs = require('fs')
//const d3 = require("d3");

app.get('/',(req,res)=>{
    res.send('<h2 style="margin:2rem"> Welcome to Homepage</h2>');
})

app.get('/about',(req,res)=>{
    res.send('<h2 style="margin:2rem"> Welcome to About us page</h2>');
})

app.get('/data',(req,res)=>{
    res.send(data);
})

app.get("/list_movies", (req, res) => {
    fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
        res.send(data);
    });
});


var data = fs.readFileSync("C02_EmissionCleaned.csv", "utf8")
//z= function (data) {return {xyz :data}}
console.log(data)

// d3.csv('C02_EmissionCleaned.csv').then(data=>{
//     console.log("hello")
// })

const port = process.env.PORT || 3000 //First inititalizing the port

app.listen(port,()=>{
    console.log(`Express is listening on port:${port}`)
})//Second we are going to listen to that port 

//Route the user to the page that user wants to visit