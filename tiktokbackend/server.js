import express  from 'express'
import Videos from './dbModel.js'
import './database.js'

import data from './data.js' 

//app config
const app = express();
const port = 8000;

//middlewares
app.use(express.json())
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*')
    next()
})


//api endpoints
app.get('/',(req,res) => res.status(200).send('hello world!') )

app.get('/v1/posts', (req,res) => res.status(200).send(data))


app.get('/v2/posts', (req,res) => {
    Videos.find( (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    }) 
})

app.post('/v2/posts', (req,res) => {
    //POST request es para añaadir videos a la base de datos
    //lo añadira a la collecion de videos
    const dbVideos = req.body

    Videos.create(dbVideos, (err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })


})


//listen
app.listen(port, () => console.log(`server on localhost: ${port} `))

//iWzxYxztmw3YUASV