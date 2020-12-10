import express from 'express'
import {
  createChannel,
  editChannel,
  getChannel,
} from '../controllers/channelController.js'
const router = express.Router()
import auth from '../middleware/auth.js'

router.get('/get', auth, getChannel)
router.post('/get', auth, createChannel)
router.put('/edit', auth, editChannel)
export default router
