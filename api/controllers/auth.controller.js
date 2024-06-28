import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../lib/prisma.js'
export const register = async (req, res) => {
  const { username, email, password } = req.body
  //HASH THE PASSWORD
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    // CREATE A NEW USER AND SAVE IT TO THE DATABASE
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    })
    console.log(newUser)
    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to create user',
    })
  }
}
export const login = async (req, res) => {
  //db operations
  const { username, password } = req.body

  try {
    //Check if user exists
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    })
    if (!user) {
      return res.status(401).json({
        message: 'Invalid username or password',
      })
    }
    //Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return res.status(401).json({
        message: 'Invalid username or password',
      })
    }
    //Generate the cookie token and send it to user
    const age = 1000 * 60 * 60 * 24 * 7

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    )
    const { password: userPassword, ...userInfo } = user

    res
      .cookie('token', token, {
        httpOnly: true,
        // secure:true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to login!' })
  }
}
export const logout = (req, res) => {
  res.clearCookie('token').status(200).json({ message: 'Logout Successful' })
}
