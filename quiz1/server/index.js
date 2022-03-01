var cors = require('cors')
const axios = require('axios')
const config = require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const TOKEN = process.env.BEARER_TOKEN
const NEWSAPI = process.env.NEWS_API
const port = 3000
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}) )
let reddata = []
let twdata = []
let newsdata = []

app.get('/', (req, res) => {
	res.send('Hello world!')
})
app.get('/wind',async (req,res) =>{
	const data  = await getrpi()
	const speed = data.wind
	res.send(speed)
})
async function getrpi(){
	const url = 'http://api.openweathermap.org/data/2.5/weather?zip=12180&units=imperial&appid=db4171e3e4d490375715d4949cb14003'
	const res = await axios.get(url)
	console.log(res)
	return res.data

}
app.post('/temperature',async (req,res) =>{
	temparr = []
	const zip = req.query.zip
	const data = await getTemp(zip)
	const temp = data.main.temp
	const feeling = await getFeel(temp)
	const icon = data.weather[0].icon
	temparr.push(temp.toString())
	temparr.push(feeling)
	temparr.push(icon)
	console.log(feeling)
	res.send(temparr)

	
})
async function getFeel(temp){
	feeling = ""
	if(temp < 33){
		feeling = "Freezing"
		return feeling
	}else if(temp > 33 && temp < 50){
		feeling = "Cold"
		return feeling

	}
	else if(temp > 51 && temp < 80){
		feeling = "Warm"
		return feeling
	}

}
async function getTemp(zip){
	const url =`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=db4171e3e4d490375715d4949cb14003`
	const res = await axios.get(url)
	return res.data
	// console.log(res.data)
}
// app.post('/reddit',async(req,res) =>{
// 	const topic = req.query.topic
//     const data = await getReddit(topic)
//     reddata = []
//     for(let i=0; i < data.length ;i++){
//         const tmp = data[i].data.title
//         let result = sentiment.analyze(tmp)
//         let rtmp = makeGroup(tmp,result['score'])
//         reddata.push(rtmp)
        
//     }
//     res.send(reddata)
// })
// app.post('/news', async (req,res) =>{
// 	const topic = req.query.topic
// 	const data = await getNews(topic)
// 	newsdata = []
// 	for(let i =0; i< data.length;i++){
// 		let text = data[i].description
// 		if(text != null){
// 			text.replace(/(<([^>]+)>)/ig,"").replace('\r', '').trim()
// 			let result = sentiment.analyze(text)
// 			let tmp = new makeGroup(text,result['score'])
// 			newsdata.push(tmp)
// 		}
// 	}
// 	res.send(newsdata)

// })



app.listen(port, () => {
	console.log('Listening on *:3000')
})

