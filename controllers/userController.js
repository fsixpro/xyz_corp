import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../model/UserModel.js'
import Utility from '../utilities/Utility.js'
const util = new Utility()

//register new user
export const registerUser = async (req, res) => {
  const valid = util.formCheck(req.body)
  if (valid !== true) return util.failureResponse(res, 200, valid.msg)
  try {
    const { email, password } = req.body

    //check if user already exist
    const user = await User.findOne({ email })
    if (user) return util.failureResponse(res, 400, 'user already exist')

    //create new user object
    const newUser = new User({
      email,
      password,
    })

    //hash password before saving to database
    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(password, salt)
    await newUser.save()
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET)
    return util.successResponse(res, 201, {
      email: newUser.email,
      token,
    })
  } catch (error) {
    return util.failureResponse(res, 500, 'internal server error')
  }
}

//login a user
export const login = async (req, res) => {
  const valid = util.formCheck(req.body)
  if (valid !== true) return util.failureResponse(res, 400, valid.msg)
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) return util.failureResponse(res, 400, 'user does not exist')
    const matchPassword = await bcrypt.compare(password, user.password)

    if (!matchPassword)
      return util.failureResponse(res, 400, 'password is incorrect')
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    return util.successResponse(res, 200, {
      email: user.email,
      token,
    })
  } catch (error) {}
}
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user)
    if (!user) return util.failureResponse(res, 400, 'no user found')
    return util.successResponse(res, 200, {
      email: user.email,
    })
  } catch (error) {}
}
