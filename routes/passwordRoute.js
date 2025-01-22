const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    const data = [
        { "uuid": "E98iRYJShpl4SfPNEkcCY", "site": "Playstation Network" },
        { "uuid": "LUlj7n3K6LVKl1lqTcuXQ", "site": "Nvidia GeForce Experience" },
        { "uuid": "5YOhcboTlEATcOOGArr55", "site": "Google Account" }
    ]
    res.send(data)
});

module.exports = route;