// import Vue from 'vue'
import axios from 'axios';
const global_funURL = 'BAIDU'
// const $axios = axios.create({
//   global_funURL,
// })
function global_funA () {
  console.log("global_funA")
}
function global_funB () {
  console.log("global_funB")
}
function global_funA1 (url, params) {
  console.log("okokok")
  params = params || {};
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}
function global_funB2 (url, params) {
  params = params || {};
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
export default {
  global_funURL,
  global_funA,
  global_funB,
  global_funA1,
  global_funB2
}