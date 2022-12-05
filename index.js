const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://heeaePark:12qwaszx@boiler-plate.mumxel4.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Mongo DB connected!'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~!~!~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})