import usersModel from "../models/users.model.js";

const getAllUsers = async() => {
    return await usersModel.getAllUsers()
}

const postNewUser = async (user) => {
    return await usersModel.postNewUser(user)
}

const patchUser = async(id, user) => {
    return await usersModel.patchUser(id, user)
}

export default {
    getAllUsers,
    postNewUser,
    patchUser
}