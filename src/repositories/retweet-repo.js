const CrudRepository = require("./crud-repo");
const {Retweet} = require('../models');
class RetweetRepository extends CrudRepository{
    constructor(){
        super(Retweet);
    }
}

module.exports = RetweetRepository;