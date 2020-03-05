import request from '@/utils/request'
import address from './address'

export function fetchArticleList(query) {
  return request({
    url: address.articleList,
    method: 'get',
    params: query
  })
}

export function fetchArticleDetail(id) {
  return request({
    url: address.articleDetail,
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: address.createArticle,
    method: 'post',
    data
  })
}

