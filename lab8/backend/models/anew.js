const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    senData:{
        type: Number,
        require: true
    }
},{collection: 'news', versionKey: false})

newsSchema.statics.isthere = async function(text){
    try {
        const news = await this.findOne({text})
        if(news) return false
        return true
    } catch (error) {
        console.log("error instide",error.message)
        return false
        
    }
}
module.exports = mongoose.model('news', newsSchema)