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
export const putWithToken = async ( url, data ) => {
  let token = window.sessionStorage.getItem( 'token' )
  const res = await axios( {
    method: 'put',
    url: `/api/${url}`,
    data,
    headers: {
      'token': token
    }
  } );
  return res
}
export function formatSeconds(value) {
  /**
   * 将秒转换为年月日时分秒
   **/
  var year_1 = 3600 * 24 * 30 * 12;
  var month_1 = 3600 * 24 * 30;
  var day_1 = 3600 * 24;
  var hour_1 = 3600;
  var minute_1 = 60;
  var year = 0,
      month = 0,
      day = 0,
      hour = 0,
      minute = 0,
      second = 0
  if (value <= 0) {
      return "No Time"
  } else if (value < minute_1) {
      // 小于一分钟
      second = value
  } else if (value < hour_1) {
      // 小于一小时
      minute = parseInt(value / minute_1)
      second = parseInt(value % minute_1)
  } else if (value < day_1) {
      // 小于一天
      hour = parseInt(value / hour_1)
      minute = parseInt(value % hour_1 % minute_1)
      second = parseInt(value % hour_1 / minute_1)
  } else if (value < month_1) {
      // 小于一月
      day = parseInt(value / day_1)
      hour = parseInt(value % day_1 / hour_1)
      minute = parseInt(value % day_1 % hour_1 / minute_1)
      second = parseInt(value % day_1 % hour_1 % minute_1)
  } else if (value < year_1) {
      // 小于一年
      month = parseInt(value / month_1)
      day = parseInt(value % month_1 / day_1)
      hour = parseInt(value % month_1 % day_1 / hour_1)
      minute = parseInt(value % month_1 % day_1 % hour_1 / minute_1)
      second = parseInt(value % month_1 % day_1 % hour_1 % minute_1)
  } else {
      // 大于一年
      year = parseInt(value / year_1)
      month = parseInt(value % year_1 / month_1)
      day = parseInt(value % year_1 % month_1 / day_1)
      hour = parseInt(value % year_1 % month_1 % day_1 / hour_1)
      minute = parseInt(value % year_1 % month_1 % day_1 % hour_1 / minute_1)
      second = parseInt(value % year_1 % month_1 % day_1 % hour_1 % minute_1)
  }
  year = (year == 0) ? "" : (year + " 年 ")
  month = (month == 0) ? "" : (month + " 月 ")
  day = (day == 0) ? "" : (day + " 天 ")
  hour = (hour == 0) ? "" : (hour + " 时 ")
  minute = (minute == 0) ? "" : (minute + " 分 ")
  second = second + " 秒 "
  return year + month + day + hour + minute + second
}
