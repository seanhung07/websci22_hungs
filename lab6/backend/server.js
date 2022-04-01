const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const Sentiment = require('sentiment');
const langdetect = require('langdetect');
const path = require('path');
const app = express()
mongoose.connect('mongodb+srv://hungs:seanhung@cluster0.s2rpg.mongodb.net/test')
const sentiment = new Sentiment();
app.use(express.static(path.join(__dirname, '../frontend/lab5/dist/lab5')));

const db = mongoose.connection
db.on('error' , (error)=>console.log(error))
db.once('open',() => console.log("connected"))

app.use(express.json())
const newsRouter = require('./routes/news.js')
app.use('/db' , newsRouter)
app.get('/news', async (req,res) =>{
	const topic = "crypto"
	const data = await getNews(topic)
	newsdata = []
	for(let i =0; i< data.length;i++){
		let text = data[i].description
		if(text != null){
			text.replace(/(<([^>]+)>)/ig,"").replace('\r', '').trim()
			let result = sentiment.analyze(text)
			let tmp = new makeGroup(text,result['score'])
			newsdata.push(tmp)
		}
	}
    const data2 = await getReddit(topic)
    for(let i=0; i < data2.length ;i++){
        const tmp = data2[i].data.title
        let result = sentiment.analyze(tmp)
        let rtmp = makeGroup(tmp,result['score'])
        newsdata.push(rtmp)
        
    }
	const data3 = await getRules(topic)
	twdata = []
	for(let i = 0 ;i <data3.data.length; i++){
		let text = data3.data[i].text
		 text = text.replace('\r', '')
	      .replace(/RT\s+/g, '')
	      .replace('&amp;', '')
	      .replace('&lt;', '')
	      .replace('&gt;', '')
	      .replace(/&gt;+/g,'')
	      .replace(/#/g, '')
	      .replace(/\s+/g, ' ').trim()
        text = text.replace(/(@)[\n\S]+/g, '')
	   	text = text.replace(/(?:https?):\/\/[\n\S]+/g, '')
      	text = text.replace(/(?:http?):\/\/[\n\S]+/g, '')
		if(langdetect.detect(text) != null){
			if(langdetect.detect(text)[0].lang == 'en'){
				let result = sentiment.analyze(text)
				let tmp = new makeGroup(text,result['score'])
				twdata.push(tmp)
			}
		}
	}
	const arr1 = getUniqueListBy(twdata, 'text')
	for(let i = 0; i<twdata.length;i++){
		newsdata.push(twdata[i])
	}
    for(let i=0; i<newsdata.length;i++){
        const article = { text: newsdata[i].text , senData: newsdata[i].senData };
        axios.post('http://localhost:3000/db', article)
    }
	res.send(newsdata)

})
async function getNews(topic){
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&language=en&apiKey=3c6d43dcc59b482ba9f9a7224a7cd57f`)
    return response.data.articles
}
async function getReddit(topic){
    const response = await axios.get(`https://www.reddit.com/r/${topic}/new.json`)
    return response.data.data.children
}
async function getRules(topic) {
	const url = `https://api.twitter.com/2/tweets/search/recent?query=${topic}&max_results=100`	
	const token ="AAAAAAAAAAAAAAAAAAAAAByhYgEAAAAAsZUJO1jrHUme1VZ7WyhQfKYnA68%3DWHfH7u7fBUxKb5a5ayyOMGdMZAcZefXWaUUqjwEzQB1pkk78F9"
	const response = await axios.get(url, {
	  headers: {
		Authorization: `Bearer ${token}`,
	  },
	})
	return response.data
}
function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

function makeGroup(text,senData){
	let obj = {
		text: text,
		senData: senData
	}
	return obj
}
app.listen( 3000, ()=> console.log("Server Started"))