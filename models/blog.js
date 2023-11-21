const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
}, { timestamps: true})

const Blog = mongoose.model(process.env.DB_MODEL_NAME, blogSchema)

module.exports = Blog;