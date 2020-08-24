const express = require('express')
const morgan = require('morgan')
const noInsomnia = require("./middleware/no-insomnia")
const logger = require("./middleware/logger")
const welcomeRouter = require('./welcome/welcome-router')
const usersRouter = require('./users/users-router')

const server = express()
const port = 4000

server.use(express.json())
server.use(noInsomnia())
server.use(morgan("combined"))
server.use(logger("long"))

server.use(welcomeRouter)
server.use(usersRouter)

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
