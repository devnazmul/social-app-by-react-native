const { Post } = require("../models");

const createPost = (req, res) => {
    Post.create({
        uid: req.body.uid,
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
    }).then((post) => {
        res.status(201).json(post)
    }).catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
    })
}

module.exports = {
    createPost,
}