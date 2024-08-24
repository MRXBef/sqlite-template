import express from "express"
import { register, getUsers, login, logout } from "../controllers/Users.js"
import verifyToken from "../middleware/verifyToken.js"

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.delete('/logout', logout)
router.get('/users', verifyToken, getUsers)

router.get('/', getUsers)

export default router