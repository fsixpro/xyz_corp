import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import userRoute from './routes/userRoute.js'
import channelRoute from './routes/channelRoute.js'
import db from './Db.js'
const app = express()
dotenv.config()

db()
app.use(cors())
app.use(express.json())
app.use(morgan)
app.use('/api/user', userRoute)
app.use('/api/channel', channelRoute)

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
