//const express = require('express')  //Common JS
import express from "express"
import userRoutes from "./routes/userRoutes.js"

// Create app
const app = express()

// Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Public Folder
app.use(express.static('public'))

// Routing
app.use('/auth', userRoutes)

// Define port and start proyect
const port = 3000
app.listen(port, () => {
    console.log(`The app is reunning on port ${port}`)
})