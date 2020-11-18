const add = (a,b,callback)=>{
    setTimeout(()=>{
        let c = a+b
        callback(c)
    },2000)
}

add(1,5,(s)=>{
    console.log(s)
})