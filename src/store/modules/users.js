import {
  prop
} from 'ramda'
import Users from '@/resources/users'
import {
  requestHandler
} from '@/utils/handlers'

export default {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    }
  },
  actions: {
    async get ({ commit }) {
      const [, users] = await requestHandler(Users.get())

      const indexedUsers = users.results.map((user, index) => {
        user.id = index

        return user
      })

      commit('SET_USERS', indexedUsers)
    }
  },
  getters: {
    all: state => prop('users', state)
  }
}
