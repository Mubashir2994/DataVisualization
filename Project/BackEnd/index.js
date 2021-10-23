const express=require('express');  // importing express using require
  const app = express(); //Creating an instance of express

app.get('/',(req,res)=>{
    res.send('<h2 style="margin:2rem"> Welcome to Homepage</h2>');
})

app.get('/about',(req,res)=>{
    res.send('<h2 style="margin:2rem"> Welcome to About us page</h2>');
})

const port = process.env.PORT || 3000 //First inititalizing the port

app.listen(port,()=>{
    console.log(`Express is listening on port:${port}`)
})//Second we are going to listen to that port 

//Route the user to the page that user wants to visit