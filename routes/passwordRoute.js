import express from 'express'
import Password from '../models/Password.js'

const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const response = await Password.find()
        res.send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.post('/store', async (req, res) => {
    try {
        let data = req.body
        const response = await Password.create(data)
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.delete('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id
        const response = await Password.findByIdAndDelete(id)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

export default route;