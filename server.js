const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const db = require('./queries')
const cors = require("cors")

app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users/:id', db.getUsers)
app.post('/users/:email', db.userLogin)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/coins', db.getCoins)
app.post('/searchCoins', db.searchCoins)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
