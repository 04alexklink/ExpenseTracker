const mongoose = require('mongoose');
const config = require('./config')

const DBConnect = async () => {
  try{
    const conn = await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected!`)
 }catch (err) {
  console.log(`Error: ${err.message}`)
  process.exit(1);
  }
}

module.exports = DBConnect;