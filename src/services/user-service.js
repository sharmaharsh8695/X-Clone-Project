const {UserRepository} = require('../repositories');
const {User} = require('../models');
const userRepo = new UserRepository();

async function createUser(data){
    try {
        const user =await userRepo.create(data);
        return user;
    } catch (error) {
        throw error;
    }
}

async function getUser(id){
    try {
        const user =await userRepo.get(id);
        return user;
    } catch (error) {
        throw error;
    }
}

async function updateUser(id,data){
    try {
        const user = await userRepo.update(id,data)
        return user;
    } catch (error) {
        throw error;
    }
}

async function deleteUser(id){
    try {
        const user = await userRepo.destroy(id);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,

}