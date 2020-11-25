const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
//master bug fix 
///testLine
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'../public')))
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{title:"Root page",name:"batfish"})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:"About page",name:"batfish"})
})


app.get('/help',(req,res)=>{
    res.render('help',{title:"Help page",name:"batfish"})
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

app.get('/help/*',(req,res)=>{
    res.render('notfound',{title:"404 Page",err:"couldn't find help file!",name:"batfish"})
})
app.get('*',(req,res)=>{
    res.render('notfound',{title:"404 Page",err:"couldn't find ,404!",name:"batfish"})
    
})


app.listen(3000,()=>{
    console.log("server started on port 3000")
})