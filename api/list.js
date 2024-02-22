import instance from '../util/request.js'

export function getLists(data){
  return instance({
    url:'/note-api/note',
    method:'GET',
    data
  })
}

export function addNewNote(data){
  return instance({
    url:'/note-api/note',
    method:'POST',
    data
  })
}

export function removeNote(noteId){
  return instance({
    url:`/note-api/note/${noteId}`,
    method:'DELETE'
  })
}

export function toTopAction(noteId){
  return instance({
    url:`/note-api/note/top/${noteId}`,
    method:'PUT'
  })
}

export function note(noteId){
  return instance({
    url:`/note-api/note/${noteId}`,
    method:'GET'
  })
}

export function edit(data){
  return instance({
    url:'/note-api/note',
    method:'PUT',
    data
  })
}

export function setCate(data){
  return instance({
    url:'/note-api/note/classify',
    method:'PUT',
    data
  })
}

export function setPwd(data){
	return instance({
		url:'/note-api/note/password',
		method:'PUT',
		data
	})
}