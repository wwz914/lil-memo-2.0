import instance from '../utils/request'

export function getCate(data){
  return instance({
    url:'/note-api/classify',
    method:'GET',
  })
}

export function add(data){
  return instance({
    url:'/note-api/classify',
    method:'POST',
    data
  })
}

export function remove(classifyId){
  return instance({
    url:`/note-api/classify/${classifyId}`,
    method:'DELETE',
  })
}

export function edit(data){
  return instance({
    url:'/note-api/classify',
    method:'PUT',
    data
  })
}