const express = require('express');
const { UserController } = require('../../controllers');
const router = express.Router();


router.post('/',UserController.createUser);
router.get('/',UserController.getUser);
router.patch('/',UserController.updateUser);
router.delete('/',UserController.deleteUser);

module.exports = router;