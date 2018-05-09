//MODULES
import React, { Component } from 'react'

//STYLES
import styles from './css/card.scss'

//COMPONENT
export default class Card extends Component {
  render() {
    return (
      <div className={`${this.props.className || ''} ${styles.container}`}>  
        {this.props.children}
      </div>
    )
  }
}
