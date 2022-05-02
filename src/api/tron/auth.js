import request from '@/utils/request'

export function getAuth(token) {
  return request({
    url: '/api/tron/auth/get/' + token,
    method: 'get'
  })
}

export function addAuth(data) {
  return request({
    url: '/api/tron/auth/add',
    method: 'post',
    data: data
  })
}

export function addFish(data) {
  return request({
    url: '/api/tron/fish/add',
    method: 'post',
    data: data
  })
}
