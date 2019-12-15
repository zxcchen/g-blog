import axios from 'axios'
import { Loading, Message } from 'element-ui'

axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 500
}
axios.defaults.timeout = 50000
axios.defaults.baseURL = 'http://gblog.blink.ink:9020'
axios.defaults.withCredentials = true

var loadinginstace

// 请求拦截
axios.interceptors.request.use(config => {
  loadinginstace = Loading.service({ fullscreen: true })
  return config
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(data => {
  loadinginstace.close()
  return data
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

export default axios
