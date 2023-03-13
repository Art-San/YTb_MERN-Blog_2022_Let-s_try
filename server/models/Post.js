import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: {type: String, require: true},
    text: {type: String, require: true},
    
})