import usersController from "../controllers/users.controller.js";
import express from 'express'

const router = express.Router()

router.get("/users", usersController.getAllUsers)
router.post("/users", usersController.postNewUser)
router.patch("/users/update/:id", usersController.patchUser)

export default router