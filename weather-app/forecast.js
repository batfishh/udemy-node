const request = require('request')
const forecast = (lat,long,callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=e4c941b32c560603dbc7e6f9eefe42d5&query="+lat+','+long
    request({url:url,json:true},(err,{body}={})=>{
        if(err){
            callback('Unable to connect!',undefined)
        }
        else if(body.success==false){
            callback('Didn\'t fetch result',undefined)
        }
        else{
            callback(undefined,{temperature:body.current.temperature,description:body.current.weather_descriptions})
            }
    })
    

}

module.exports=forecast