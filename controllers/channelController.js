import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Channel from '../model/ChannelModel.js'
import Utility from '../utilities/Utility.js'
const util = new Utility()

export const getChannel = async (req, res) => {
  const channel = await Channel.findOne({ user: req.user })
  if (!channel) return util.failureResponse(res, 404, 'channel not found')
  return util.successResponse(res, 200, {
    dog: channel.dog,
    cat: channel.cat,
    goat: channel.goat,
  })
}
export const createChannel = async (req, res) => {
  try {
    const { dog, cat, goat } = req.body
    const channel = await Channel.findOne({ user: req.user })
    if (channel) return util.failureResponse(res, 400, 'channel created')
    const newCh = new Channel({
      dog: dog,
      cat: cat,
      goat: goat,
      user: req.user,
    })
    await newCh.save()
    return util.successResponse(res, 200, {
      dog: newCh.dog,
      cat: newCh.cat,
      goat: newCh.goat,
    })
  } catch (error) {
    return util.failureResponse(res, 500, 'internal server error')
  }
}

export const editChannel = async (req, res) => {
  try {
    const { dog, cat, goat } = req.body
    const channel = await Channel.findOneAndUpdate(
      { user: req.user },
      {
        dog: dog,
        cat: cat,
        goat: goat,
      },
      { new: true, omitUndefined: true }
    )
    return util.successResponse(res, 200, channel)
  } catch (error) {
    return util.failureResponse(res, 500, 'internal server error')
  }
}
