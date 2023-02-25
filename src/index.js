const express = require('express')
require('dotenv').config('../')

console.log(process.env)

const app = express();
app.use(express.json());

app.listen(4000, () => {
    console.log('Listening on port 4000...')
})