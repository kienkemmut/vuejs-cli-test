import * as types from '../mutation-types'
// import Vue from 'vue'
// import router from '../../router'
import http from '../../utils/http-config.js'

const state = {
  listFoods: [],
  oneFoods: []
}

const getters = {
  listFoods: state => state.listFoods,
  oneFoods: state => state.oneFoods
}

const actions = {
  getFoods ({commit}) {
      let urlFoods = `foods`
      http.customAxios.get(urlFoods).then(response => {
        let dataFoods = response.data
        if (response.status === 200) {
          commit(types.GET_FOODS, dataFoods)
        }
        console.log(response, 'success')
      }, response => {
        console.log(response, 'error')
      })
  },
  getOneFoods ({commit}, id) {
    return new Promise((resolve) => {
      let urlFoods = `foods/`
      http.customAxios.get(urlFoods + id, {id: id}).then(response => {
        let dataOneFoods = response.data
        if (response.status === 200) {
          commit(types.GET_ONE_FOODS, dataOneFoods)
        }
        resolve(dataOneFoods)
        console.log(response, 'success')
      }, response => {
        console.log(response, 'error')
      })
    })
  },
}

const mutations = {
  [types.GET_FOODS] (state, dataFoods) {
    state.listFoods = dataFoods
  },
  [types.GET_ONE_FOODS] (state, dataOneFoods) {
    state.oneFoods = dataOneFoods
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
