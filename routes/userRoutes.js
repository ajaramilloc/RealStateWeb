import express from "express"

const router = express.Router()

// Routing
router.get('/', function(req, res){
    res.send('Hello world from express')
})

router.get('/us', function(req, res){
    res.send('US')
})

export default router