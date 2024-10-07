import usersService from "../services/users.service.js";

const getAllUsers = async (req,res) => {
    const users = await usersService.getAllUsers()
    res.status(200).send(users)
}

const postNewUser = async(req,res) => {
    const user = req.body
    if(JSON.stringify(user) === "{}"){
        res.status(400).send("El nuevo usuario no puede estar vacio")
    } else {
        const newUser = await usersService.postNewUser(user)
        res.status(200).send(newUser)
    }
}

const patchUser = async(req, res) => {
    const { id } = req.params
    const data = req.body
    if(id == null || JSON.stringify(data) === "{}"){
        res.status(403).send("Falta ID del usuario a modificar")
    } else {
        const patchedUser = await usersService.patchUser(id, data)
        res.status(200).send(patchedUser)
    }
}


export default {
    getAllUsers,
    postNewUser,
    patchUser
}