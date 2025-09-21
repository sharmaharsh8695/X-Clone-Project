const express = require('express');
const { LikeController } = require('../../controllers');
const router = express.Router();


router.post('/',LikeController.createLike);
router.delete('/',LikeController.deleteLike);

module.exports = router;