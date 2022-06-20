const { Post, Comment } = require("../models");

const createPost = (req, res) => {
    Post.create({
        uid: req.body.uid,
        image: req.body.image,
        content: req.body.content,
    }).then((post) => {
        res.status(201).json(post)
    }).catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
    })
}
const addComment = (req, res) => {
    Comment.create({
        uid: req.body.uid,
        content: req.body?.content || '',
        image: req.body?.image || '',
    }).then((comment) => {
        res.status(201).json(comment)
    }).catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
    })
}

const getPost = (req,res) =>{
    Post.find({},(err,posts)=>{
        res.send(posts)
    })
}
module.exports = {
    createPost,
    addComment,
    getPost,
}