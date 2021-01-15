import request from '@/utils/request'

export function getAddresses() {
  return request({
    url: '/addresses',
    method: 'get'
  })
}

export function addAddresses(data) {
  return request({
    url: '/addresses',
    method: 'post',
    data
  })
}
