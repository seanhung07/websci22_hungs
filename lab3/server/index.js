var cors = require('cors')
const axios = require('axios')
const config = require('dotenv').config()
const express = require('express')
const Sentiment = require('sentiment');
const bodyParser = require('body-parser')
const langdetect = require('langdetect');
const TOKEN = process.env.BEARER_TOKEN
const NEWSAPI = process.env.NEWS_API
const port = 3000
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}) )
let reddata = []
let twdata = []
let newsdata = []
const sentiment = new Sentiment();
app.get('/', (req, res) => {
	res.send('Hello world!')
})
app.post('/reddit',async(req,res) =>{
	const topic = req.query.topic
    const data = await getReddit(topic)
    reddata = []
    for(let i=0; i < data.length ;i++){
        const tmp = data[i].data.title
        let result = sentiment.analyze(tmp)
        let rtmp = makeGroup(tmp,result['score'])
        reddata.push(rtmp)
        
    }
    res.send(reddata)
})
app.post('/news', async (req,res) =>{
	const topic = req.query.topic
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
	res.send(newsdata)

})
app.post('/result', async (req, res) => {
	const topic = req.query.topic
	const data = await getRules(topic)
	twdata = []
	for(let i = 0 ;i <data.data.length; i++){
		let text = data.data[i].text
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
	res.send(arr1)
})
app.get('/data',(req,res) =>{
	let pos = 0,neg = 0,neutral = 0;
	const total = []
	for(let i =0; i< reddata.length;i++){
		if(reddata[i].senData > 0){
			pos +=1
		}else if(reddata[i].senData == 0){
			neutral+=1
		}else if(reddata[i].senData < 0){
			neg +=1
		}

	}
	for(let i =0; i< twdata.length;i++){
		if(twdata[i].senData > 0){
			pos +=1
		}else if(twdata[i].senData == 0){
			neutral+=1
		}else if(twdata[i].senData < 0){
			neg +=1
		}

	}
	for(let i =0; i< newsdata.length;i++){
		if(newsdata[i].senData > 0){
			pos +=1
		}else if(newsdata[i].senData == 0){
			neutral+=1
		}else if(newsdata[i].senData < 0){
			neg +=1
		}

	}
	let tmp = new makeAll(pos,neg,neutral)
	res.send(tmp)

})
async function getRules(topic) {
	const url = `https://api.twitter.com/2/tweets/search/recent?query=${topic}&max_results=100`	
	const response = await axios.get(url, {
	  headers: {
		Authorization: `Bearer ${TOKEN}`,
	  },
	})
	return response.data
  }
  async function getReddit(topic){
	  const response = await axios.get(`https://www.reddit.com/r/${topic}/new.json`)
	  return response.data.data.children
  }
  async function getNews(topic){
	  const response = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&language=en&apiKey=${NEWSAPI}`)
	  return response.data.articles
  }
function makeGroup(text,senData){
	let obj = {
		text: text,
		senData: senData
	}
	return obj
}
function makeAll(pos,neg,neutral){
	let obj ={
		pos: pos,
		neg: neg,
		neutral: neutral
	}
	return obj
}
function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

app.listen(port, () => {
	console.log('Listening on *:3000')
})

