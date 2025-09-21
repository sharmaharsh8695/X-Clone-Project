const {RetweetService} = require('../services');

async function createRetweet(req,res){
    try {
        const like =await RetweetService.createRetweet(req.body.tweetId,{
        userId : req.body.userId,
        content : req.body.content,

        });
        return res.send({like: like,mssg:"liked a tweet"});
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}

async function deleteRetweet(req,res){
    try {
        const tweet =await TweetService.deleteTweet(req.body.id);
        return res.send(tweet);
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}

module.exports={
    
}