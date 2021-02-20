const mongoose = require('mongoose');

const DBConnect = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://04alexklink:bsprouts1@expensetracker.secwi.mongodb.net/ExpenseTracker?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected!`)
 } catch (err) {
  console.log(`Error: ${err.message}`)
  process.exit(1);
  }
}

module.exports = DBConnect;