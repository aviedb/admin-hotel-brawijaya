//MODULES
import React, { Component } from 'react'
import { Button, Form, Image, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

//ASSETS

//STYLES
import styles from './css/index.scss'

//COMPONENTS

export default class Register extends Component {
  
  onSubmit = e => {
    e.preventDefault()
    
  }
  
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bg}>
          <div className={styles.title}>
            <h1>SANS RESTO</h1>
            <a>Ease of Sales Management</a>
          </div>

          <div className={styles.register}>
            <Form onSubmit={this.onSubmit} >
              <Form.Field>
                <label>Email</label>
                <input placeholder='resto@sans.ngopi.men' />
              </Form.Field>
              <Form.Field>
                <label>Owner Name</label>
                <input placeholder='sans aja' />
              </Form.Field>
              <Form.Field>
                <label>Resto Name</label>
                <input placeholder='sans resto' />
              </Form.Field>
              <Form.Field>
                <label>Phone</label>
                <input placeholder='+62 xxxxxxxxx' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='*******' />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='*******' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit' fluid color='grey' >Register</Button>
            </Form>
          </div>

          <Link className={styles.link} to="/login">you have an account! login here</Link>

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