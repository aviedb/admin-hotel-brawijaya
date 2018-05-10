/*
  TABLE
  USAGE:
  props.headers = [
    'header 1', 'header 2'
  ]

  props.data = [
    [
      'row 1', 'row 2', 'row 3',
    ],
    [
      'row 1', 'row 2', 'row 3',
    ]
  ]
*/

//MODULES
import React, { Component } from 'react'

//STYLES
import styles from './style.scss'

//COMPONENTS
import { Pagination } from 'semantic-ui-react'

//COMPONENT
export default class Table extends Component {
  renderHeaders() {
    let { headers } = this.props

    return headers.map((data, i) => {
      return (
        <td className={styles.header} key={i} >
          {data}
        </td>
      )
    })
  }

  renderData() {
    let { data } = this.props

    return data.map((data, i) => {
      return (
        <tr className={styles.row} key={i} >
          {data.map((data, i) => (
            <td className={styles.data} key={i}>
              {data}
            </td>
          ))}
        </tr>
      )
    })
  }

  onPageChange = (e, { activePage }) => {
    this.props.onPageChange(activePage)
  }

  render() {
    let { loading, pagination, totalPages, defaultWidth } = this.props

    // loading = true

    let style = {}

    if (loading) style.filter = 'blur(10px)'
    if (defaultWidth) style.width = defaultWidth

    return (
      <div className={styles.container} >
        <div className={styles.wrapper} >
          <table
            className={styles.table}
            style={style}
          >
            <thead className={`${styles.headers} ${styles.row}`} >
              <tr>
                {this.renderHeaders()}
              </tr>
            </thead>

            <tbody className={styles.wrapper} >
              {this.renderData()}
            </tbody>
          </table>

          {
            loading
              ? (
                <div className={styles.loading}>
                  Loading ...
                </div>
              )
              : ''
          }
        </div>

        {
          pagination
            ? (
              <div className={styles.pagination} >
                <Pagination
                  defaultActivePage={1}
                  firstItem={null}
                  lastItem={null}
                  pointing
                  secondary
                  totalPages={totalPages || 10}
                  onPageChange={this.onPageChange}
                />
              </div>
            )
            : ''
        }

      </div>
    )
  }
}
