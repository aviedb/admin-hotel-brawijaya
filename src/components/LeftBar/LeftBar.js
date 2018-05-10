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
              <Image src={'/static/icon/dashboard.svg'} className={styles.image} inline verticalAlign='bottom'/>
              <span className={styles.span} >Dashboard</span>
            </div>
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick.bind(this, '/qrcode')}>
            <div to={'#'} >
              <Image src={'/static/icon/logout.svg'} className={styles.image} inline verticalAlign='bottom'/>
              <span className={styles.span} >Logout</span>
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
