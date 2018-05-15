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
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      visible: true
    }
  }

  componentDidMount() {
    addEventListener('resize', () => this.updateScreenWidth());
    this.updateVisible();
  }

  updateScreenWidth() {
    this.setState({
      width: window.innerWidth,
      visible: window.innerWidth > 1230
    });
  }

  updateVisible() {
    if (window.innerWidth < 1231) {
      this.setState({
        visible: false
      });
    }
  }

  toggleVisible() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div className={styles.container} >
        <TopBar toggleVisible={() => this.toggleVisible()}/>
        <LeftBar
          visible={this.state.visible}
          toggleVisible={() => this.toggleVisible()}
          screenWidth={this.state.width}
        />

        <div className={styles.content} >
          {this.props.orders}
        </div>
      </div>
    )
  }
}

export default ScreenWrapper
