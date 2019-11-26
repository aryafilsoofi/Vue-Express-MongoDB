const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray())
})

// Add Post

// Delete Post

// Connect to post collection

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://dbUser:dbUserPassword@vue-express-mongodb-cluster-xaoks.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    return client.db('vue-express').collection('posts')

}


module.exports = router;