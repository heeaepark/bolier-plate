const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ //유저 스키마 작성
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim : true, //이메일의 공백을 제거해준다.
    unique: 1 //이메일 중복 불가
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: { //유저에 대한 권한 설정
    type: Number, //숫자 등급에 따른 권한 설정을 위해 타입을 Number로 지정
    default: 0 //role 미지정 시 모든 유저 등급은 0이다.
  },
  image: String,
  token: { //토큰을 이용한 유효성 검사
    type: String
  },
  tokenExp: { //토큰 사용기간 설정
    type: Number
  }
});

const User = mongoose.model('User', userSchema); //스키마를 모델로 감싸주는 작업

module.exports = { User } //다른 곳에서도 User model을 사용할 수 있도록 exports 해준다.