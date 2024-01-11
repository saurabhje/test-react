const express = require('express');
const router = express.Router();
router.post('/login', (req, res) => {
    const username = req.body.username ;
    const password = req.body.password ;

    console.log(username, password);

    res.status(200).json({
        username,
        password
    })
})

module.exports =  router;