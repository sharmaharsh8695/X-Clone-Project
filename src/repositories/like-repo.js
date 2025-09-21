const CrudRepository = require("./crud-repo");
const {Like} = require('../models');
class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
}

module.exports = LikeRepository;