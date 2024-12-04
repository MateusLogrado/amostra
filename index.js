const express = require("express")
const app = express()
const cors = require("cors")
const conn = require("./db/conn")

const PORT = 3000
const hostname = "127.0.0.1"

// ---------- Config aplication -------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// ------------------------------------------
app.get("/", (req,res)=>{
    res.json({mesage: "Aplicação rodando!! - Viva !!!"})
})

// ------------------------------------------
// conn.sync().then().catch()
app.listen(PORT, hostname, ()=>{
    console.log(`Servidor Rodando em ${hostname}:${PORT}`)
})