//MODULES
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

//SCREENS
import Home from './screens/Home'
import QRCode from './screens/QRCode/index'
import QRCode2 from './screens/QRCode2'
import Login from './screens/Login'
import Register from './screens/Register'

//CONFIG
import {
  TOKEN_ADDRESS,
  END_POINT_URL,
} from './config'

//COMPONENT
export default class AppRouter extends Component {
  componentWillMount() {
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.baseURL = END_POINT_URL
    if (localStorage.getItem(TOKEN_ADDRESS))
      axios.defaults.headers.common['Authorization'] = localStorage.getItem(TOKEN_ADDRESS)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/qrcode2" component={QRCode2} />
          <Route path="/qrcode" component={QRCode} />
          <Redirect from="/" exact to="/home" />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </BrowserRouter>
    )
  }
}
