const { Sequelize } = require("sequelize")
const conecta = new Sequelize("teste_warn", "root", "senai", {
    host: "localhost",
    dialect: "mysql"
})

conecta.authenticate().then(()=>{
    console.log(`O banco de dados conectou com sucesso`)
}).catch((err)=>{
    console.error(`Não foi possivel conectar com o banco de dados`, err)
})

module.exports = conecta