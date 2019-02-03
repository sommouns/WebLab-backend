import axios from 'axios'
var qs=require('qs');
var instance = axios.create({
});
export const postParams = async ( url, params ) => {
  const res = await instance( {
    method: 'post',
    url: `/api/${url}`,
    params
  } );
  return res
}
export const postData = async ( url, data ) => {
  const res = await instance( {
    method: 'post',
    url: `/api/${url}`,
    data
  } );
  return res
}
export const getWithToken = async ( url, params ) => {
  let token = sessionStorage.getItem( 'token' )
  const res = await instance( {
    method: 'get',
    url: `/api/${url}`,
    params,
    headers: {
      'token': token
    }
  } );
  return res
}
export const getWithNoToken = async ( url, params ) => {
  const res = await instance( {
    method: 'get',
    url: `/api/${url}`,
    params,

  } );
  return res
}
export const deleteWithToken = async ( url, params ) => {
  let token = window.sessionStorage.getItem( 'token' )
  const res = await axios.delete(`/api/${url}`,{
    params,
    headers: {
      'token': token
    }
  })
  return res
}
export const putWithToken = async ( url, params ) => {
  let token = window.sessionStorage.getItem( 'token' )
  const res = await axios( {
    method: 'put',
    url: `/api/${url}`,
    params,
    headers: {
      'token': token
    }
  } );
  return res
}
