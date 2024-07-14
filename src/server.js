import express from 'express'
import connectDB from '~/config/connectDB'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', (req, res) => {
  res.end('<h1>Hello World!</h1><hr>')
})

connectDB()
app.listen(port, hostname, () => {
  console.log(`Hello Dat Dev, I am running at ${hostname}:${port}/`)
})
