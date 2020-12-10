import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import channelRoute from './routes/channelRoute.js'
import db from './Db.js'
const app = express()
dotenv.config()

db()
app.use(cors())
app.use(express.json())

app.use('/api/user', userRoute)
app.use('/api/channel', channelRoute)
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
