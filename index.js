const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 8080
const register = require('./src/register')
const login = require('./src/login')
const votePokemon = require('./src/votePokemon')
const getScorePokemon = require('./src/getScorePokemon')
const auth = require('./middleware/auth')

app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE")
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept, x-access-token, x-refresg-token,_id,Authorization")
res.header("Access-Control-Expose-Headers","x-access-token, x-refresg-token")
    next();
})
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

app.get('/hello', async (req, res) => {
    res.json("Hello westride")
})

app.post('/register', async (req, res) => {
    register(req,res)
})

app.post('/login', async (req, res) => {
    login(req,res)
})

app.post('/pokemon/vote', auth, async (req, res) => {
    votePokemon(req,res)
})

app.get('/pokemon/score/all', auth, async (req, res) => {
    getScorePokemon(req,res)
})