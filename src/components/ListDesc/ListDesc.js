//MODULES
import React, { Component } from 'react'

//STYLE
import styles from './style.scss'

//COMPONENT
export default class ListDesc extends Component {
  renderList() {
    let { data } = this.props

    return data.map((row, i) => {
      return (
        <tr key={i} >
          {row.map((data, i) => {
            return (
              <td key={i} >
                {data}
              </td>
            )
          })}
        </tr>
      )
    })
  }

  render() {
    return (
      <div className={styles.container} >
        <table>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    )
  }
}
