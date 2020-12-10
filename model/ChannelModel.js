import mongoose from 'mongoose'
const Schema = mongoose.Schema

const channelSchema = new Schema({
  dog: {
    type: Boolean,
    default: false,
  },
  cat: {
    type: Boolean,
    default: false,
  },
  goat: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
})

export default mongoose.model('channel', channelSchema)
