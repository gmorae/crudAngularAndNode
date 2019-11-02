const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

function conexao() {
    return mysql.createConnection({
        host: 'localhost',
        port: '5050',
        user: 'root',
        password: '',
        database: 'testaStefanini'
    })
}

app.use(bodyParser())
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATH, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.listen(8080, () => {
    console.log('Servidor funcionando !')
})

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/user", (req, res) => {
    const sql = "select * from programadores"
    conexao().query(sql, (erro, ln, cl) => {
        console.log("sucesso")
        res.json(ln)
    })
})

app.post('/user', (req, res) => {
    var nome = req.body.nome
    var sobrenome = req.body.sobrenome
    var idade = req.body.idade
    var dataNascimento = req.body.dataDenascimento
    var linguagem = req.body.linguagem
    var observacao = req.body.observacao
    const sql = "INSERT INTO programadores (nome, sobrenome, idade, dataDenascimento, linguagem, observacao) VALUES ( ?, ?, ?, ?, ?, ?);"
    conexao().query(sql, [nome, sobrenome, idade, dataNascimento, linguagem, observacao], (erro, result, fields) => {
        if (erro) {
            console.log("Erro: " + erro)
            res.sendStatus(500)
            return
        }
        console.log("Inserido com sucesso")
    })
    res.end()
})

app.put('/atualizar', )