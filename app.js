const express = require ("express")
const app = express()
const agendamentos = require("./banco")

app.listen(8081,function(){
    console.log("Servidor Ativo!")
})

app.get("/",function(req,res){
    res.send("Página Principal")
})

app.get("/cadastrar/nome", function(req,res){
    agendamentos.create({
        nome: req.params.nome
    })
    res.send("Resgistro inserido com sucesso")
})

app.get("/cadastrar/endereco", function(req,res){
    agendamentos.create({
        nome: req.params.endereco
    })
    res.send("Resgistro inserido com sucesso")
})

app.get("/cadastrar/bairro", function(req,res){
    agendamentos.create({
        nome: req.params.bairro
    })
    res.send("Resgistro inserido com sucesso")
})

app.get("/cadastrar/cep", function(req,res){
    agendamentos.create({
        nome: req.params.cep
    })
    res.send("Resgistro inserido com sucesso")
})

app.get("/cadastrar/cidade", function(req,res){
    agendamentos.create({
        nome: req.params.cidade
    })
    res.send("Resgistro inserido com sucesso")
})

app.get("/cadastrar/estado", function(req,res){
    agendamentos.create({
        nome: req.params.estado
    })
    res.send("Resgistro inserido com sucesso")
})

app.get("/cadastrar/oservacao", function(req,res){
    agendamentos.create({
        nome: req.params.observacao
    })
    res.send("Resgistro inserido com sucesso")
})