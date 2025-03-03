const express = require('express')
const router = express.Router()
const tweetController = require('../../controllers/tweet-controller')

// setting routes
router.get('/', tweetController.getTweets)
router.post('/', tweetController.postTweet)
router.get('/:id', tweetController.getTweet)
router.put('/:id', tweetController.putTweet)
router.get('/:id/replies', tweetController.getReplies)
router.post('/:id/replies', tweetController.postReply)
router.post('/:id/like', tweetController.likeTweet)
router.post('/:id/unlike', tweetController.unlikeTweet)

module.exports = router
