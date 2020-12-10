import express from 'express'
const router = express.Router()
import { getUser, login, registerUser } from '../controllers/userController.js'
import auth from '../middleware/auth.js'

router.route('/').get(auth, getUser)
router.post('/register', registerUser)
router.post('/login', login)

export default router
