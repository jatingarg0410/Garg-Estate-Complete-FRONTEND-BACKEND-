import express from 'express'

const app = express()
console.log('fff')
app.use('/api/test', (req, res) => {
  res.send('It works')
})
app.use('/api/auth/register', (req, res) => {
  res.send('It works')
})
app.use('/api/auth/login', (req, res) => {
  res.send('It works')
})

app.use('/api/auth/logout', (req, res) => {
  res.send('It works')
})
app.use('/api/posts/', (req, res) => {
  res.send('It works')
})
app.use('/api/posts/', (req, res) => {
  res.send('It works')
})
app.listen(8800, () => {
  console.log('server is running at 8800')
})
