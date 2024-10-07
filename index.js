import express from 'express'
import usersRoutes from './routes/users.route.js'

const PORT = 8080
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", usersRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.on("error", (error) => {
    console.log("Error: ", error)
})