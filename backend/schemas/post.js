const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    },
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
})

const CommentSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = {
    PostSchema,
    CommentSchema
}