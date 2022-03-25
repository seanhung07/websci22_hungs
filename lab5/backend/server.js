const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://hungs:seanhung@cluster0.s2rpg.mongodb.net/test')
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/lab5/dist/lab5')));

const db = mongoose.connection
db.on('error' , (error)=>console.log(error))
db.once('open',() => console.log("connected"))

app.use(express.json())
const newsRouter = require('./routes/news.js')
app.listen( 3000, ()=> console.log("Server Started"))
app.use('/db' , newsRouter)
