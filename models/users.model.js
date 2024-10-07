const users = [
    {id: 1, nombre: "Laura", apellido: "Szmulewicz", email: "laura@mail.com", estudiante: true},
    {id: 2, nombre: "Pedro", apellido: "Sanchez", email: "pedro@gmail.com", estudiante: true},
    {id: 3, nombre: "Marta", apellido: "Perez", email: "marta@mail.com", estudiante: false},
    {id: 4, nombre: "Jose", apellido: "Gimenez", email: "jose@mail.com", estudiante: true},
    {id: 5, nombre: "Gabriel", apellido: "Hernandez", email: "gabriel@mail.com", estudiante: false},
]

const getAllUsers = async() => {
    return await users;
}

const postNewUser = async(user) => {
    user.id = users[users.length-1].id + 1
    users.push(user)
    return user
}

const patchUser = async(id, user) => {
    const userIndex = users.findIndex(us => us.id === parseInt(id))
    const newUser = {...users[userIndex], ...user}
    users.splice(userIndex, 1, newUser)
    return newUser
}

export default {
    getAllUsers,
    postNewUser,
    patchUser
}