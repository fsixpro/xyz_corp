import mongoose from 'mongoose'

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log('mongo db connected successfuly')
  } catch (error) {
    console.log('mongo error', error)
  }
}

export default db
