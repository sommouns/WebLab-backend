import axios from 'axios';
import {
    postParams,
    postData,
    getWithToken,
    getWithNoToken,
    deleteWithToken,
    putWithToken
  } from './tools.js'

//
// admin controller
//
export const requestLogin_api = ( { username, password } ) => {
    return new Promise( ( resolve, reject ) => {
      const res = postParams( '/admin/v1/login', {
        username,
        password
      } )
      console.log(res)
      resolve( res )
    } )
  }
  export const logout_api = () => {
    return new Promise( ( resolve, reject ) => {
      const res = getWithToken( '/admin/v1/logout')
      sessionStorage.removeItem('token')
      resolve( res )
    } )
  }

//
// course controller
//
export const getAllCourse_api = async ( pages ) => {
    return new Promise( ( resolve, reject ) => {
      const res = getWithToken( '/course/v1/courses', {
        pages
      } )
      resolve( res)
    } )
  }  
export const searchCourse_api = async ( id ) => {
    return new Promise( ( resolve, reject ) => {
      const res = getWithToken( `/course/v1/course/${id}`)
      resolve( res )
    } )
  } 
export const deleteMyCourse_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = deleteWithToken( `course/v1/course/${id}`,)
    console.log(res)
    resolve( res)
  } )
}  
export const addCourse_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = deleteWithToken( `course/v1/course/${id}`,)
    console.log(res)
    resolve( res)
  } )
}  


//
// Student controller
//
export const getAllStudent_api = async ( pages ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( '/student/v1/students', {
      pages
    } )
    resolve( res)
  } )
}  
export const searchStudent_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( `/student/v1/student/${id}`)
    resolve( res )
  } )
} 
export const deleteMyStudent_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = deleteWithToken( `student/v1/student/${Number(id)}`,)
    console.log(res)
    resolve( res)
  } )
}  
export const addStudent_api = async ( payload ) => {
  return new Promise( ( resolve, reject ) => {
    const res = postData( `/student/v1/add`, payload)
    console.log(res)
    resolve( res)
  } )
}  
export const modifyStudent_api = async ( id, payload ) => {
  return new Promise( ( resolve, reject ) => {
    const res = putWithToken( `/student/v1/update/${id}`, payload)
    console.log(res)
    resolve( res)
  } )
}  
//
// Admin controller
//
export const getAllAdmin_api = async ( pages ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( '/admin/v1/admins', {
      pages
    } )
    resolve( res)
  } )
}  
export const searchAdmin_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( `/admin/v1/admin/${id}`)
    resolve( res )
  } )
} 
export const deleteMyAdmin_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = deleteWithToken( `admin/v1/admin/${Number(id)}`,)
    console.log(res)
    resolve( res)
  } )
}
export const addAdmin_api = async ( payload ) => {
  return new Promise( ( resolve, reject ) => {
    const res = postData( `admin/v1/add`, payload)
    console.log(res)
    resolve( res)
  } )
}  
//
// Template controller
//
export const getAllTemplate_api = async ( pages ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( '/courseTemplete/v1/courseTempletes', {
      pages
    } )
    resolve( res)
  } )
}  
export const searchTemplate_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( `/courseTemplete/v1/course/${id}`)
    resolve( res )
  } )
} 
export const deleteMyTemplate_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = deleteWithToken( `/courseTemplete/v1/courseTemplete/${id}`,)
    console.log(res)
    resolve( res)
  } )
}  
export const addTemplate_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = deleteWithToken( `admin/v1/course/${id}`,)
    console.log(res)
    resolve( res)
  } )
}  

//
// Teacher controller
//
export const getAllTeacher_api = async ( pages ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( '/teacher/v1/teachers', {
      pages
    } )
    resolve( res)
  } )
}  
export const searchTeacher_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( `/teacher/v1/teacher/${id}`)
    resolve( res )
  } )
} 
export const deleteMyTeacher_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = deleteWithToken( `/teacher/v1/teacher/${id}`,)
    console.log(res)
    resolve( res)
  } )
}  
export const addTeacher_api = async ( payload ) => {
  return new Promise( ( resolve, reject ) => {
    const res = postData( `/teacher/v1/add`, payload)
    console.log(res)
    resolve( res)
  } )
}  
export const modifyTeacher_api = async ( id, payload ) => {
  return new Promise( ( resolve, reject ) => {
    const res = putWithToken( `/teacher/v1/update${id}`, payload)
    console.log(res)
    resolve( res)
  } )
}  

//reports
export const getAllReports_api = async ( pages ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( '/report/v1/reports', {
      pages
    } )
    resolve( res)
  } ) 
}  
export const searchReportById_api = async ( id ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( `/report/v1/report/${id}`)
    resolve( res )
  } )
} 
export const searchReportByStudentId_api = async ( id, pages ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( `/report/v1/reports/${id}`, {
      pages
    })
    resolve( res )
  } )
} 
export const searchReportByCourseIdAndTempId_api = async ( course_id, template_id, pages ) => {
  return new Promise( ( resolve, reject ) => {
    const res = getWithToken( `/report/v1/reports/${template_id}/${course_id}`, {
      pages
    })
    resolve( res )
  } )
} 