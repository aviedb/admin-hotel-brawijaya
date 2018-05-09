//MODULES
import { observable } from 'mobx'
import axios from 'axios'

//STORE
import { TOKEN_URL } from '../../config'

//STORE
class Token {
  constructor() {
    let raw = localStorage.getItem(TOKEN_URL)

    if (raw) this.setToken(raw)
  }

  @observable raw = ''

  setToken(token) {
    this.raw = token
    axios.defaults.headers['Authorization'] = this.formatted
    localStorage.setItem(TOKEN_URL, this.raw)
  }

  get formatted() {
    return `Bearer ${this.raw}`
  }
}

export default new Token()