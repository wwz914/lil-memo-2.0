import instance from '../util/request.js'

export function login(data){
  return instance({
    url:'/note-api/user/login',
    method:'POST',
    isToken:false,
    data
  })
}

export function register(data){
  return instance({
    url:'/note-api/user/register',
    method:'POST',
    isToken:false,
    data
  })
}

export function getInfo(){
  return instance({
    url:'/note-api/user/info',
    method:'GET'
  })
}