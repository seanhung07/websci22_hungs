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

module.exports = mongoose.model('news', newsSchema)