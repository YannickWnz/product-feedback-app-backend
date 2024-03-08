import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send({message: 'hello world'})
})

app.listen(1556, () => {
    console.log('listening on port 1556')
})