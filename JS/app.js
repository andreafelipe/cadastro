const express = require("express")
const app = express()
const path = require("path");

app.get("/index/cadastro", (req, res) => {
   res.sendFile(path.resolve('../html/cadastro.html'))
})

app.listen(8081, function(){
    console.log("Funcionando")
})