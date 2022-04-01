const express = require('express')
const router = express.Router()
const  News = require('../models/anew')

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
    const news = new News({
        text : req.body.text,
        senData : req.body.senData
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
    if (req.body.text != null) {
        res.news.text = req.body.text
      }
      if (req.body.senData != null) {
        res.news.senData = req.body.senData
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