import express from 'express'
import cookieParser from 'cookie-parser'
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import { config } from 'dotenv'

config()
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute)
app.listen(8800, () => {
  console.log('server is running at 8800')
})
