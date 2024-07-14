import express from 'express'
import connectDB from '~/config/connectDB'
import { env } from './config/environment'

const app = express()

// --------------------CONNECT MYSQL----------------------
connectDB()
// --------------------CONFIG APP----------------------
app.get('/', (req, res) => {
  res.end('<h1>Hello World!</h1><hr>')
})

// --------------------START SERVER----------------------
app.listen(env.LOCAL_DEV_APP_PORT, () => {
  console.log(`Hello Dat Dev, I am running at PORT:${env.LOCAL_DEV_APP_PORT}`)
})
