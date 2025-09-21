const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const tweetRoutes = require('./tweet-routes');
const likeRoutes = require('./like-routes')
router.get('/info',(req,res) => {
    res.send({
        mssg : "Server Started Successfully",
    });
})

router.use('/user',userRoutes);
router.use('/tweet',tweetRoutes);
router.use('/like',likeRoutes);

module.exports = router;