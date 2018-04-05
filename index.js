const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World! (from project 1)')
})

app.listen(8001, () => console.log('Example app listening on port 8001!'))
