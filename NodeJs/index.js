const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())

let users = [
    {
    id: 1,
    name: 'Nihad',
    surname: 'Ibrahimkhanli'
    },
    {
        id: 2,
        name: 'Abbas',
        surname: 'Aliyev'
    },
    {
        id: 3,
        name: 'Teymur',
        surname: 'Heyderli'
    },
    

]

app.get('/code/users/', (req, res) => {
    res.json(users)
})

app.delete('/code/users/:id', (req,res) => {
    const{ id } = req.params
    users = users.filter((item) => item.id != id)
    res.json('User deleted successfully!')
})

app.post('/code/users', (req,res) => {
    const userBody = req.body
    users.push(userBody)
    res.send('User added successfully!')
    console.log(userBody)
})
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`.green.bold))