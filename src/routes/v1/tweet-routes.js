const express = require('express');
const { TweetController } = require('../../controllers');
const router = express.Router();


router.post('/',TweetController.createTweet);
router.delete('/',TweetController.deleteTweet);
router.get('/',TweetController.getTweet);
router.patch('/',TweetController.updateTweet);

module.exports = router;