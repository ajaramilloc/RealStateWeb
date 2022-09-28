import express from "express"

const router = express.Router()

// Routing
router.get('/', (req, res) => {
    res.json({msg: 'GET'})
})

router.post('/', (req, res) => {
    res.json({msg: 'POST'})
})

export default router