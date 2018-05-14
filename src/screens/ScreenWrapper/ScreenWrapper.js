//MODULES
import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

//ASSETS
// import logo from './logo.svg'
// import { Sidebar, Fragment, Menu, Image } from 'semantic-ui-react'

//STYLES
import styles from './style.scss';

//COMPONENTS
import LeftBar from '../../components/LeftBar';
import TopBar from '../../components/TopBar';

//COMPONENT
class ScreenWrapper extends Component {
  render() {
    return (
      <div className={styles.container} >
        <TopBar />
        <LeftBar />

        <div className={styles.content} >
          {this.props.orders}
        </div>
      </div>
    )
  }
}

export default ScreenWrapper
