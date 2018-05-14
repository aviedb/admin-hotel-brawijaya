//MODULES
import React, { Component } from 'react'

import ScreenWrapper from '../ScreenWrapper';
import Orders from './Orders'

//COMPONENT
class App extends Component {
  render() {
    return (
      <ScreenWrapper orders={<Orders />}/>
    )
  }
}

export default App
