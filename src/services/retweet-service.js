const {RetweetRepository, TweetRepository} = require("../repositories");
const retweetRepository = new RetweetRepository();
const tweetRepository = new TweetRepository();

async function createRetweet(data){
    try{
        const retweet = await retweetRepository.create(data);
        await tweetRepository.create()
        return retweet;
    }
    catch(error){
        throw error;
    }
}

module.exports={

}