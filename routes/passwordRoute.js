import express from 'express'
import fs from 'fs'

const route = express.Router()

const path = 'databases/store.json'
const file = fs.readFileSync(path, 'utf-8')
const data = JSON.parse(file)

route.get('/', (req, res) => {
    res.send(data)
})

route.post('/store', (req, res) => {
    try {
        data.push(req.body)
        fs.writeFileSync(path, JSON.stringify(data))
        res.send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.delete('/delete/:uuid', (req, res) => {
    try {
        const index = data.findIndex((item) => item.uuid === req.params.uuid)
        data.splice(index, 1)
        fs.writeFileSync(path, JSON.stringify(data))
        res.send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

export default route;