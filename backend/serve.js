const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db/db')
require('dotenv').config()
app.use(cors())
app.use(express.json())
db()
port = 3425
const router = require('./routes/route')
app.use('/routes',router)

app.listen(port,()=>{
    console.log("server started")
})