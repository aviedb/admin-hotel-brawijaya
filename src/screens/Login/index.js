//MODULES
import React, { Component } from 'react'
import { Button, Form, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Message } from 'semantic-ui-react'


//STYLES
import styles from './css/index.scss'

//CONFIG
import { GRAPHQL_END_POINT } from '../../config'

//STORE 
import { token } from '../../services/stores'

//COMPONENTS
export default class Login extends Component {
  onSubmit = e => {
    e.preventDefault()

    let { email, password } = this.state
    this.setState({isLoading: true, error: null})

    axios.post(GRAPHQL_END_POINT, {
      query: `
        mutation {
          restaurantAdminLogin (email: "${email}", password: "${password}")
        }
      `
    }).then(({data}) => {
      this.setState({isLoading: false, error: !data ? 'Login failed' : ''})
      if (!data) return

      let loginToken = data.data.restaurantAdminLogin
      token.setToken(loginToken)
      this.props.history.push('/home')
    }).catch(err => {
      console.log(err)
      this.setState({error: 'Login failed'})
    })
  }

  state = {
    email: '',
    password: '',
    isLoading: false,
    error: null,
  }

  handleChange(key, e) {
    this.setState({[key]: e.target.value})
  }

  renderMessage = () => {
    if (this.state.error) return (
      <Message negative>
        <p>{this.state.error}</p>
      </Message>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bg}>
          <img src="/static/image/BG.jpg" alt=""/>
        </div>

        <div className={styles.wrapper} >
          <div className={styles.title}>
            <h1>SANS RESTO</h1>
            <a>Ease of Sales Management</a>
          </div>

          <div className={styles.login}>
            <Form onSubmit={this.onSubmit} >
              <Form.Field>
                <label>Email</label>
                <input 
                  placeholder='resto@sans.ngopi.men' 
                  onChange={this.handleChange.bind(this, 'email')}
                  value={this.state.email}
                  type="email"
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input 
                  placeholder='*******' 
                  onChange={this.handleChange.bind(this, 'password')}
                  value={this.state.password}
                  type="password"
                />
              </Form.Field>
              <Form.Field>
                <a>forget password?</a>
              </Form.Field>
              <Button loading={this.state.isLoading} type='submit' fluid color='grey' >Login</Button>
              {this.renderMessage()}
            </Form>
          </div>

          <Link className={styles.link} to="/register">create a new account</Link>

          <div className={styles.cs} >
            <div className={styles.support}>
              <Image className={styles.imgSupport} src="/static/icon/support_green.svg" inline verticalAlign='bottom' />
              <span className={styles.title} >Support</span>
            </div>
            <div className={styles.text}>
              <span>sans@ngopi.men</span>
              <div>+62 85851851276</div>
            </div>
            <div>
              <a className={styles.customer} href="http://customer.sans.ngopi.men" target="_blank" >customer.sans.ngopi.men</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}