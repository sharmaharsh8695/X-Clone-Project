const {UserService} = require('../services');

async function createUser(req,res){
    try {
        const user =await UserService.createUser({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        });
        return res.send({user,mssg:"created a user"});
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}

async function getUser(req,res){
    try {
        const user =await UserService.getUser(req.body.id);
        return res.send(user);
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}

async function updateUser(req,res){
    try {
        const user =await UserService.updateUser(req.body.id,{
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        });
        return res.send(user);
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}
async function deleteUser(req,res){
    try {
        const user =await UserService.deleteUser(req.body.id);
        return res.send(user);
    } catch (error) {
        return res.send({error,mssg:"something went wrong"});
    }
}
module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    
}