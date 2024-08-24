import express from "express"
import { register, getUsers, login, logout, testGet } from "../controllers/Users.js"
import verifyToken from "../middleware/verifyToken.js"

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.delete('/logout', logout)
router.get('/users', getUsers)

router.get('/', testGet)

export default router