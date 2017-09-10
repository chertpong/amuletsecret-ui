import * as types from '../mutation-types'

// initial state
const state = {
  isOn: false
}

// getters
const getters = {
  isOn: state => state.isOn
}

// actions
const actions = {
  toggleSidebar ({ commit, state }) {
    commit(types.TOGGLE_SIDEBAR, state.isOn)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR] (state, isSidebarOn) {
    state.isOn = !isSidebarOn
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
