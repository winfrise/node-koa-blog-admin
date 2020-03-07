import request from '@/utils/request'

import address from './address'
export const uploadFile = (formData) => {
  return request({
    url: address.uploadFile,
    method: 'post',
    data: formData
  })
}
