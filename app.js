console.log("hello world")

// ----------------------------------------------

const colors=require('colors');
console.log(colors.green('hello in green'));

// ----------------------------------------------

            /* GET /student

            GET /teacher

            GET /student/:id

            POST /student

            PUT /student/:id
            */

// Video streaming application //


const express = require('express');
const app=express();

/*
// routing // -- routes
//Route GET/
// Access Public
//DESC shows homepage
app.get('/', (req,res) => {
    res.send('hello from akswitch');
})

app.get('/like', (req,res) => {
    res.send('my liked videos');
})

app.get('/profile', (req,res) => {
    res.send('my profile');
})

app.get('/video', (req,res) => {
    res.send('some video');
})

app.get('/video/:videoId', (req,res) => {
    console.log(req.params);
    res.send(`this is some video by id ${req.params.videoId}`);
})

 */

app.set("view engine", "ejs");


app.get('/',(req, res)=>{
    try{
        res.render('./home')
    }catch(err){
        console.log(err)
    }   
})

app.get('/user', (req, res)=>{
    res.send('User Details')
})

app.get('/user/:id', (req, res)=>{
    res.send('Usser By Id')
})

app.get('/video/:videoId', (req, res)=>{
    console.log(req.params)
    res.send(`This is some video by it\'s id ${req.params.videoId}`)
})

app.listen(3000, ()=>{
    console.log(`Server has started`)
})