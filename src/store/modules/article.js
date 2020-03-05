import { createArticle } from '@/api/article'

const state = {

}

const mutations = {

}

const actions = {
  // user login
  createArticle({ commit }, data) {
    return new Promise((resolve, reject) => {
      createArticle(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

