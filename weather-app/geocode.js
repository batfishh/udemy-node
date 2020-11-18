const request = require('request')
const geocode = (address,callback)=>{
    const geo_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiMjdhc2h3aW5rdW1hciIsImEiOiJja2hteDJtMXAycXpjMnNsNjVsOHpqc29yIn0.VY_AmN7wjWBpdLvKHuV-Xg&limit=1"

    request({url:geo_url,json:true},(err,{body}={})=>{
        if(err){
            callback('Unable to connect!-geo',undefined)
        }
        else if(body.features.length==0){
            callback('Didn\'t fetch result',undefined)
        }
        else{
            callback(undefined,{latitude:body.features[0].center[1],longitude:body.features[0].center[0],placename:body.features[0].place_name})
        }
    })
    

}

module.exports=geocode