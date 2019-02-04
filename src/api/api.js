import axios from 'axios';
import {
    postParams,
    postData,
    getWithToken,
    getWithNoToken,
    deleteWithToken,
    putWithToken
  } from './tools.js'


export const requestLogin = ( { username, password } ) => {
    return new Promise( ( resolve, reject ) => {
      const res = postParams( '/ctfplatform/admin/v1/login', {
        username,
        password
      } )
      console.log(res)
      resolve( res )
    } )
  }

export const getAllCourse = async ( pages ) => {
    return new Promise( ( resolve, reject ) => {
      const res = getWithToken( '/ctf/course/v1/courses', {
        pages
      } )
      console.log(res)
      resolve( res )
    } )
  }  

// export const getUserList = params => { return saxios.get(`${base}/user/list`, { params: params }); };

// export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

// export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

// export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };