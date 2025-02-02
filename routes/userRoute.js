import express from 'express'
import User from '../models/User.js'

const route = express.Router()

route.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(200).send(user);
        const response = await User.create(req.body);
        res.status(201).send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

export default route