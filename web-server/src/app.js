const express = require('express')
const app = express()
const path = require('path')
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index',{abc:"TESTSTUFF"})
})

app.get('/about',(req,res)=>{
    res.render('about',{test:"About page@!"})
})


app.get('/help',(req,res)=>{
    res.render('help',{title:"Help page@!"})
})
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