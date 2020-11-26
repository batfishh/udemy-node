const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'../public')))

//editing from pc branch

// app.get('/help',(req,res)=>{
//     res.send("help")
// })

// app.get('/about',(req,res)=>{
//     res.send('About')
// })

app.get('/weather',(req,res)=>{
    res.send('Weather')
})



app.listen(3000,()=>{
    console.log("server started on port 3000")
})