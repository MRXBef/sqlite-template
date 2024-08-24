import express from "express"
import { register, getUsers } from "../controllers/Users.js"

const router = express.Router()

router.post('/users', register)
router.get('/users', getUsers)

export default router