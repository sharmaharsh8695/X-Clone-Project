const {LikeService} = require('../services');

async function createLike(req,res){
    try {
        const like =await LikeService.createLike({
        tweetId : req.body.tweetId,
        userId : req.body.userId,
        });
        return res.send({like: like,mssg:"liked a tweet"});
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}

async function deleteLike(req,res){
    try {
        const like =await LikeService.deleteLike(req.body.id);
        return res.send("deleted a like");
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}

module.exports= {
    createLike,
    deleteLike,

}