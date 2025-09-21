const CrudRepository = require("./crud-repo");
const {Tweet} = require('../models');
class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }

}

module.exports = TweetRepository;