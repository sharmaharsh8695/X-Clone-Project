const {TweetRepository} = require("../repositories");
const tweetRepository = new TweetRepository();
async function createTweet(data) {
    try{
        const tweet = await tweetRepository.create(data);
        return tweet;
    }
    catch(error){
        throw error;
    }
}

async function getTweet(id){
    try {
        const tweet =await tweetRepository.get(id);
        return tweet;
    } catch (error) {
        throw error;
    }
}

async function updateTweet(id,data){
    try {
        const tweet = await tweetRepository.update(id,data)
        return tweet;
    } catch (error) {
        throw error;
    }
}

async function deleteTweet(id){
    try {
        const tweet = await tweetRepository.destroy(id);
        return tweet;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    createTweet,
    getTweet,
    updateTweet,
    deleteTweet,

}