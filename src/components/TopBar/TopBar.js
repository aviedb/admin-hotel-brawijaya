//MODULES
import React, { Component } from 'react'
import { Image, Dropdown } from 'semantic-ui-react'

//STYLES
import styles from './style.scss';

//COMPONENT
const notif = [
  { key: '0', text: 'Update app version v1.30.13' },
  { key: '1', text: 'Update app version v1.20.42' },
  { key: '2', text: 'Hi, welcome to Sans App. The future is in one hand.' },
  { key: '3', text: 'Hello, i will help you in using this application.' },
]

const trigger = (
  <span>
    <Image src='/static/icon/notification.svg' className={styles.notif} inline />
  </span>
)

export default class TopBar extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left} onClick={() => this.props.toggleVisible()}>
          <button className={`fas fa-bars ${styles.icon}`}/>
          <span className={styles.span}>ADMIN</span>
        </div>
      </div>
    )
  }
}
