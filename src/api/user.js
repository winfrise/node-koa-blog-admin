import request from '@/utils/request'

import address from './address'

export function toLogin(data) {
  return request({
    url: address.login,
    method: 'post',
    data
  })
}

export function tologout() {
  return request({
    url: address.siginout,
    method: 'post'
  })
}

export function toRegister(data) {
  return request({
    url: address.register,
    method: 'post',
    data
  })
}

export function fetchUserInfo() {
  return request({
    url: address.getUserInfo,
    method: 'get',
    params: { }
  })
}

export function updateUserInfo(data) {
  return request({
    url: address.updateUserInfo,
    method: 'post',
    data
  })
}
