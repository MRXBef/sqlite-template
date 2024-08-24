import express from "express"
import { register, getUsers, login } from "../controllers/Users.js"

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/users', getUsers)

export default router