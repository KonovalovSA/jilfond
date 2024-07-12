import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const api = 'https://jsonplaceholder.typicode.com/users?'

export default new Vuex.Store({
  state: {
    user: '',
    users: '',
    error: '',
    loader: false
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getUsers (state) {
      return state.users
    },
    getLoader (state) {
      return state.loader
    },
    getError (state) {
      return state.error
    }
  },
  actions: {
    async takeUsers (context, param) {
      const response = await fetch(api + param)
      if (response.ok) {
        const json = await response.json()
        context.commit('setUsers', json)
        context.commit('setLoader', false)
      } else {
        context.commit('setError', 'Параметры запроса неверные, либо ошибка сервера')
        context.commit('setLoader', false)
      }
    },
    setUser (context, user) {
      context.commit('setUser', user)
    },
    setUsers (context, users) {
      context.commit('setUsers', users)
    },
    setLoader (context, loader) {
      context.commit('setLoader', loader)
    },
    setError (context, error) {
      context.commit('setError', error)
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setUsers (state, users) {
      state.users = users
    },
    setLoader (state, boolean) {
      state.loader = boolean
    },
    setError (state, str) {
      state.error = str
    }
  }
})
