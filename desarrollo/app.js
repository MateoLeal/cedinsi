require('dotenv').config({path: './env/.env'})
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', require('./app/routes'))

app.get('/ece', (req, res) => {
    res.json(req.query)
})

app.listen(PORT, ()=>{
    console.log('SERVER UP running in http://localhost: ', PORT )
})