const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')
const url = "http://api.weatherstack.com/current?access_key=e4c941b32c560603dbc7e6f9eefe42d5&query=Bengaluru"
const geoloc = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1IjoiMjdhc2h3aW5rdW1hciIsImEiOiJja2hteDJtMXAycXpjMnNsNjVsOHpqc29yIn0.VY_AmN7wjWBpdLvKHuV-Xg&limit=1"

if(process.argv.length<3){
    console.log("Enter param")
}
else{
    geocode(process.argv[2],(err,{latitude,longitude,placename}={})=>{
        if(err){
            return console.log(err)
        }
        forecast(latitude,longitude,(err,data2)=>{
            if(err){
                return console.log(err)
            }
            console.log(latitude,longitude,placename)
            console.log(data2)
            
        })
    
    })
}


