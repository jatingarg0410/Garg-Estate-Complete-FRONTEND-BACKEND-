import express from 'express'
import cookieParser from 'cookie-parser'
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import testRoute from './routes/test.route.js'
import userRoute from './routes/user.route.js'
import { config } from 'dotenv'
import cors from 'cors'
config()
const app = express()
const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/test', testRoute)

app.listen(8800, () => {
  console.log('server is running at 8800')
})
