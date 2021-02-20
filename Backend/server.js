const express = require('express');
const cors = require('cors');
const transactionsRouter = require('./lib/routes/transactionsRouter')
const DBConnect = require('./config/db')
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: './config/config.env'
})

DBConnect()
const app = express()
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT

// app.get('/', (req, res) => {
//   res.send("Hello I am the entry point to expense tracker backend")
// })
app.use('/api/transactions', transactionsRouter)

if(process.env.NODE_ENV === "production") {
  app.use(express.static('../expense-tracker/build'))
  app.get('*', (req, res) => {
      res.sendFile(path.resolve('__dirname', '..', 'expense-tracker', 'build', 'index.html'))
  })
}

app.listen(5000, console.log(`I am running on ${PORT} in ${process.env.NODE_ENV} mode`))

