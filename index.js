const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());



const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://heeaePark:12qwaszx@boiler-plate.mumxel4.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Mongo DB connected!'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~!~!~')
})



app.post('/register', (req, res) => {
  //회원가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({ sucess: false, err })
    return res.status(200).json({
      sucess: true
    })
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})