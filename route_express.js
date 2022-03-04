const { checkPrime } = require("crypto")
const express = require("express")

const app = express()


app.get("/home",function(request,response){
    //console.log("HELLO world")
    response.send("hello")
})

app.get("/books",function(req,res){
    res.send(({book1:"afj",book2:"check",book3:"book3",book4:"book4"}))
})

app.listen(5000,()=>{
    console.log("checking port1")
})

app.listen(4000,()=>{
    console.log("checking port2")
})