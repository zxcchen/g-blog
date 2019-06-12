
const state = {
  nav: 'HomePage',
};

const getters = {
  _nav(state) {
    return state.nav
  },
};

const mutations = {//同步任务
  setNav(state, path) {
    state.nav = path;
  },
};

const actions = {//异步任务
  setNav(content,path){
    content.commit('setNav',path)
  }
};
export default {
  namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}