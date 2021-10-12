import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: {
      not_completed: [],
      in_process: [],
      completed: [],
    },
  },
  mutations: {
    Add(state,task){
      const not_completed = [...state.tasks.not_completed,task]
    }
  },
  actions: {
    AddTask({commit},payload) {
      commit('Add',payload)
    },
  },
  modules: {
  }
})
