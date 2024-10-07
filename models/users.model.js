import * as fs from 'node:fs';

const usersFromFile = async() => {
    const allUsers = await fs.promises.readFile('./assets/users.txt', "utf-8")
    const usersArray = allUsers.split(',\n')
    let jsonUsers = []
    usersArray.forEach(item => {
        if(item !== ''){
            jsonUsers.push(JSON.parse(item))
        }
    })
    return jsonUsers
}

const getAllUsers = async() => {
   return await usersFromFile()
}

const postNewUser = async(user) => {
    const users = await usersFromFile()
    user.id = users[users.length-1].id + 1
    users.push(user)
    let userString = ""
    users.forEach(user => {
        userString += `${JSON.stringify(user)},\n`
    })
    const updateFile = await fs.promises.writeFile("./assets/users.txt", userString)
    return user
}

const patchUser = async(id, user) => {
    const users = await usersFromFile()
    const userIndex = users.findIndex(us => us.id === parseInt(id))
    if(userIndex > -1){
        const newUser = {...users[userIndex], ...user}
        users.splice(userIndex, 1, newUser)
        let userString = ""
        users.forEach(user => {
            userString += `${JSON.stringify(user)},\n`
        })
        const updateFile = await fs.promises.writeFile("./assets/users.txt", userString)
        return newUser
    } else {
        return `No existe usuario con el id ${id}`
    }
}

export default {
    getAllUsers,
    postNewUser,
    patchUser
}