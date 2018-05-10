//MODULES
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

//ASSETS
// import logo from './logo.svg'
// import { Sidebar, Fragment, Menu, Image } from 'semantic-ui-react'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import LeftBar from '../../components/LeftBar'
import TopBar from '../../components/TopBar'
import Orders from './Orders'

//COMPONENT
class App extends Component {
  render() {
    return (
      <div className={styles.container} >
        <TopBar />
        <LeftBar />

        <div className={styles.content} >
          <Orders />
        </div>
      </div>
    )
  }
}

export default App
