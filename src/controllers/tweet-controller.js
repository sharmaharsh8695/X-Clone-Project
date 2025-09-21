const {TweetService} = require('../services');

async function createTweet(req,res){
    try {
        const tweet =await TweetService.createTweet({
        content : req.body.content,
        userId : req.body.userId,
        });
        return res.send({tweet : tweet,mssg:"created a tweet"});
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}

async function getTweet(req,res){
    try {
        const tweet =await TweetService.getTweet(req.body.id);
        return res.send(tweet);
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}

async function updateTweet(req,res){
    try {
        const tweet =await TweetService.updateTweet(req.body.id,{
            content:req.body.content,
        });
        return res.send(tweet);
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}
async function deleteTweet(req,res){
    try {
        const tweet =await TweetService.deleteTweet(req.body.id);
        return res.send(tweet);
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}
module.exports = {
    createTweet,
    getTweet,
    updateTweet,
    deleteTweet,
    
}