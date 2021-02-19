const express = require('express');
const morgan = require('morgan');
const config = require('./config/config');

const app = express()
const PORT = config.PORT

app.get('/', (req, res) => {
  res.send("Hello I am the entry point to expense tracker backend")
})

app.listen(PORT, console.log(`I am running on ${PORT}`))
