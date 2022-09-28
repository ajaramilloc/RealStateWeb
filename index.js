//const express = require('express')  //Common JS
import express from "express"
import userRoutes from "./routes/userRoutes.js"

// Create app
const app = express()

// Routing
app.use('/', userRoutes)

// Define port and start proyect
const port = 3000
app.listen(port, () => {
    console.log(`The app is reunning on port ${port}`)
})