const express = require('express')
const app = express()
const path =require('path')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const router = require('./controllers')
// port 
const {PORT} = require('./config')

const { urlencoded } = require('express')
// middlewares 
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(router)
app.use('/assets', express.static(path.resolve(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views',  path.resolve(__dirname, './views'))

app.listen(PORT, ()=> {
  console.info(`Server is running at ${PORT}`)
})