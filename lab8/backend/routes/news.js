const express = require('express')
const router = express.Router()
const  News = require('../models/anew')
const Sentiment = require('sentiment');
const sentiment = new Sentiment();
// getting all 
router.get('/', async (req,res)=>{
    try{
        const news = await News.find()
        res.json(news)
    }catch (err){
        res.status(500).json({ message : err.message })
    }
})
// getting one
router.get('/:id', getNews ,async (req,res)=>{
    // const news = await News.findById(req.params.id)
    res.send(res.news)
})
// createing one
router.post('/', async (req,res)=>{
    let result = sentiment.analyze(req.body.text)
    console.log(result)
    const news = new News({
        text : req.body.text,
        senData : result['score']
    })
    try{
        const isNew = await News.isthere(news.text)
        if(!isNew) {
          console.log("not new: "+ news.text)
        }else{
          const newNews = await news.save()
          res.status(201).json(newNews)
        }
    }catch(err){
        res.status(400).json({message : err.message})
    }

})
// updating one
router.put('/:id', getNews, async (req,res)=>{
    let result = sentiment.analyze(req.body.text)
    if (req.body.text != null) {
        res.news.text = req.body.text
        res.news.senData = result['score']
      }
      try {
        const newNews = await res.news.save()
        res.json(newNews)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }

})
router.delete('/:id', getNews ,async (req,res)=>{
    try {
        await res.news.remove()
        res.json({ message: 'Deleted news' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }


})
router.delete('/',async (req,res)=>{
  try {
      News.remove({},function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
    })
      res.json({ message: 'Deleted news' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }


})


async function getNews(req, res, next) {
    let news
    try {
      news = await News.findById(req.params.id)
      if (news == null) {
        return res.status(404).json({ message: 'Cannot find News' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.news = news
    next()
  }

module.exports = router