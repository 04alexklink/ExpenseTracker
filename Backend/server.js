const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');
const transactionsRouter = require('./lib/routes/transactionsRouter')
const DBConnect = require('./config/db')

DBConnect()
const app = express()
app.use(express.json())
app.use(cors());
const PORT = config.PORT

// app.get('/', (req, res) => {
//   res.send("Hello I am the entry point to expense tracker backend")
// })
app.use(transactionsRouter)

app.listen(PORT, console.log(`I am running on ${PORT}`))

