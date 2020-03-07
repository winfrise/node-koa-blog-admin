import request from '@/utils/request'
import address from './address'

export function fetchSourceList(query) {
  return request({
    url: address.sourceList,
    method: 'get',
    params: query
  })
}

export function uploadImage(data) {
  return request({
    url: address.uploadImage,
    method: 'post',
    data
  })
}

