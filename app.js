const express = require('express')

const app = express()

const path = require('path')
const homeRouter = require('./route/home')

const userRouter = require('./route/user')

app.use(express.static(path.join(__dirname,"public")))

app.use(homeRouter)

app.use(userRouter)

app.listen(5000)