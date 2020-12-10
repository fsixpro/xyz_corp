import Axios from 'axios'

const BASE_URL = '/api'
export default class Apicall {
  AxiosInstance() {
    const instance = Axios.create({
      baseURL: BASE_URL,
      validateStatus: status => {
        return status >= 200 && status <= 404
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })

    instance.defaults.timeout = 60000
    instance.defaults.maxRedirects = 1
    instance.defaults.headers.post['Content-Type'] = 'application/json'
    instance.defaults.headers.post['Accept'] = 'application/json'
    instance.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded'

    return instance
  }

  AxiosInstance1() {
    const instance = Axios.create({
      baseURL: BASE_URL,
      validateStatus: status => {
        return status >= 200 && status <= 404
      },
    })

    instance.defaults.timeout = 60000
    instance.defaults.maxRedirects = 1
    instance.defaults.headers.post['Content-Type'] = 'application/json'
    instance.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded'
    instance.defaults.headers.post['Accept'] = 'application/json'
    instance.interceptors.request.use(config => {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    return instance
  }

  async signin(params) {
    try {
      const res = await this.AxiosInstance().post('/user/login', params)
      return res
    } catch (error) {
      console.log('signin error', error.response)
    }
  }

  async register(params) {
    try {
      const res = await this.AxiosInstance().post('/user/register', params)
      return res
    } catch (error) {
      console.log('register error', error)
    }
  }

  async getUser() {
    try {
      const res = await this.AxiosInstance1().get('/user')
      return res
    } catch (error) {
      console.log('loadUser API error', error)
    }
  }

  async getChannel() {
    try {
      const res = await this.AxiosInstance1().get('/channel/get')

      return res
    } catch (error) {
      console.log('getChannel API error', error.response)
    }
  }
  async createChannel(param) {
    try {
      const res = await this.AxiosInstance1().post('/channel/', param)

      return res
    } catch (error) {
      console.log('createChannel API error', error.response)
    }
  }

  async editChannel(param) {
    try {
      const res = await this.AxiosInstance1().put('/channel/edit', param)

      return res
    } catch (error) {
      console.log('editChannel API error', error.response)
    }
  }
}
