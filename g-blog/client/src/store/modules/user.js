
const state = {
  user: {},
};

const getters = {
  _user(state) {
    return state.user
  },
};

const mutations = {//同步任务
  setUser(state, path) {
    state.user = path;
  },
};

const actions = {//异步任务
  setUser(content,path){
    content.commit('setUser',path)
  }
};
export default {
  namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}