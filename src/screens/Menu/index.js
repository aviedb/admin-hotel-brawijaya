//MODULES
import React, { Component } from 'react'

//ASSETS

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import LeftBar from '../../components/LeftBar'
import TopBar from '../../components/TopBar'
import Menus from './Menus'
import AddMenu from './AddMenu'

export default class Menu extends Component {
  render () {
    return (
      <div className={styles.container}>
        <TopBar />
        <LeftBar />

        <div className={styles.content} >
          <Menus />
          <AddMenu />
        </div>
      </div>
    )
  }
}