import React, { Component } from 'react'
import { Sidebar, Menu, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import styles from './style.scss'

class LeftBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'home'
    }
  }

  componentDidMount() {
    this.setState({activeItem: this.getRouteIndex(location.pathname)});
  }

  getRouteIndex(routeName) {
    if (routeName.indexOf('home') !== -1) {
      return 'home'
    } else if (routeName.indexOf('checkedIn') !== -1) {
      return 'checkedIn'
    } else if (routeName.indexOf('history') !== -1) {
      return 'history'
    }
  }

  handleItemClick(link, e, activeItem) {
    e.preventDefault()
    this.props.history.push(link)
    this.setState({activeItem})
  }

  render() {
    let { activeItem, visible } = this.state
    return (
      <div className={styles.container} >
        <Sidebar
          style={{fontFamily: 'Google Sans'}}
          as={Menu}
          visible={this.props.visible}
          animation='push'
          vertical
          inverted
          className={styles.wraper}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick.bind(this, '/home')}>
            <div  >
              <i className={`fas fa-th-list ${styles.icon}`}></i>
              <span className={styles.span} >Dashboard</span>
            </div>
          </Menu.Item>
          <Menu.Item
            name='checkedIn'
            active={activeItem === 'checkedIn'}
            onClick={this.handleItemClick.bind(this, '/checkedIn')}>
            <div  >
              <i className={`fas fa-calendar-check ${styles.icon}`}></i>
              <span className={styles.span} >Checked-in</span>
            </div>
          </Menu.Item>
          <Menu.Item
            name='history'
            active={activeItem === 'history'}
            onClick={this.handleItemClick.bind(this, '/history')}>
            <div  >
              <i className={`fas fa-clock ${styles.icon}`}></i>
              <span className={styles.span} >History</span>
            </div>
          </Menu.Item>
        </Sidebar>

      </div>
    )
  }
}

export default withRouter(LeftBar)
