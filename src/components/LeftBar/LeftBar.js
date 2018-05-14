import React, { Component } from 'react'
import { Sidebar, Menu, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import styles from './style.scss'

class LeftBar extends Component {
  componentDidMount() {
    this.setState({activeItem: this.getRouteIndex(location.pathname)})
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

  state = { activeItem: 'home' }

  handleItemClick(link, e, activeItem) {
    e.preventDefault()
    this.props.history.push(link)
    this.setState({activeItem})
  }

  render() {
    let { activeItem } = this.state
    return (
      <div className={styles.container} >
        <Sidebar
          style={{fontFamily: 'Google Sans'}}
          as={Menu}
          visible
          vertical
          inverted
          className={styles.wraper}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick.bind(this, '/home')}>
            <div  >
              <i className={`fas fa-th-list ${styles.image}`}></i>
              <span className={styles.span} >Dashboard</span>
            </div>
          </Menu.Item>
          <Menu.Item
            name='checkedIn'
            active={activeItem === 'checkedIn'}
            onClick={this.handleItemClick.bind(this, '/checkedIn')}>
            <div  >
              <i className={`fas fa-calendar-check ${styles.image}`}></i>
              <span className={styles.span} >Checked-in</span>
            </div>
          </Menu.Item>
          <Menu.Item
            name='history'
            active={activeItem === 'history'}
            onClick={this.handleItemClick.bind(this, '/history')}>
            <div  >
              <i className={`fas fa-clock ${styles.image}`}></i>
              <span className={styles.span} >History</span>
            </div>
          </Menu.Item>

          <div className={styles.bottom} >
            <div className={styles.support}>
              <Image className={styles.imgSupport} src="/static/icon/support.svg"  inline verticalAlign='bottom' />
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
        </Sidebar>

      </div>
    )
  }
}

export default withRouter(LeftBar)
