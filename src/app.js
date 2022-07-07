require('dotenv').config()
const PORT = 3030 || process.env.PORT
const express = require('express')
const app = express()
const morgan = require('morgan')
const isLogin = require('./middlewares/isLogin')

// Conection MongoDB
const mongoose = require('mongoose')
const connectionString = process.env.URI_DB
mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, ()=>{
    console.log('Database Connected')
})

// middlewares express
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended : false}));



//Require Routes
const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
app.use('/auth', authRouter)
app.use('/product', productRouter)

app.use(isLogin.login)

app.get('/', (req, res)=>{
    res.send('funcionando')
})

app.listen(PORT, ()=>{
    console.log(`Server only in port: ${PORT}`)
})