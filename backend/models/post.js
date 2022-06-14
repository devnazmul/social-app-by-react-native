const { PostSchema, CommentSchema } = require('../schemas');

const Post = require('mongoose').model('Post',PostSchema);
const Comment = require('mongoose').model('Comment',CommentSchema);

module.exports={
    Post,
    Comment,
}
