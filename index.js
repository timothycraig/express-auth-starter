
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const keys = require('./config/keys')

const app = express()

// DB Setup
mongoose.connect(keys.mongoURI)

// App setup
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

require('./routes/authRoutes')(app)

// Server Setup
const PORT = process.env.PORT || 5000
app.listen(PORT)
