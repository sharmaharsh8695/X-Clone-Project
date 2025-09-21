const {LikeRepository, TweetRepository} = require("../repositories");
const likeRepository = new LikeRepository();
const tweetRepository = new TweetRepository();

async function createLike(data) {
    try{
        const like = await likeRepository.create(data);

        const tweet =await tweetRepository.get(data.tweetId);
        console.log(tweet);
        await tweetRepository.update(data.tweetId,{
            likesCount :tweet.likesCount + 1,

        });
        return like;
    }
    catch(error){
        throw error;
    }
}

async function deleteLike(data) {
    try{
        const like = await likeRepository.destroy(data);
        return like;
    }
    catch(error){
        throw error;
    }
}

// async function getLike(data) {
//     try{
//         const like = await likeRepository.create(data);
//         return like;
//     }
//     catch(error){
//         throw error;
//     }
// }


module.exports ={
    createLike,
    deleteLike,

}