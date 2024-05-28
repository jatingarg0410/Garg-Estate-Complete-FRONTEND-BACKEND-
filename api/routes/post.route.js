import express from 'express'

const router = express.Router()
// router.post('/register', (req, res) => {
//   console.log('first router worls !')
// })
router.get('/love', (req, res) => {
  res.send('first router works !')
})
// router.post('/logout', (req, res) => {
//   console.log('first router worls !')
// })
export default router
