//MODULES
import React, { Component } from 'react'
import { Search, Label } from 'semantic-ui-react'
import _ from 'lodash'

//STYLES
import styles from './css/orders.scss'

//COMPONENTS
import Card from '../../components/Card'
import Table from '../../components/Table'

const tableHeaders = [
  'Booking Code',
  'Full Name',
  'Phone Number',
  'Check-in',
  'Check-out',
  'Duration',
  'Visitor',
  'Extra',
  'Type',
  'Total Cost'
]

const tableData = [
  [
    'VCBH42',
    'Coffescript',
    '085851851276',
    '9 Mei 2018',
    '11 Mei 2018',
    '2 night(s)',
    '1 adult(s), 0 child(s)',
    '1 room(s), 0 extra bed(s)',
    'Superior',
    'Rp. 800.000'
  ], [
    'VCBH42',
    'Coffescript',
    '085851851276',
    '9 Mei 2018',
    '11 Mei 2018',
    '2 night(s)',
    '1 adult(s), 0 child(s)',
    '1 room(s), 0 extra bed(s)',
    'Superior',
    'Rp. 800.000'
  ], [
    'VCBH42',
    'Coffescript',
    '085851851276',
    '9 Mei 2018',
    '11 Mei 2018',
    '2 night(s)',
    '1 adult(s), 0 child(s)',
    '1 room(s), 0 extra bed(s)',
    'Superior',
    'Rp. 800.000'
  ], [
    'VCBH42',
    'Coffescript',
    '085851851276',
    '9 Mei 2018',
    '11 Mei 2018',
    '2 night(s)',
    '1 adult(s), 0 child(s)',
    '1 room(s), 0 extra bed(s)',
    'Superior',
    'Rp. 800.000'
  ], [
    'VCBH42',
    'Coffescript',
    '085851851276',
    '9 Mei 2018',
    '11 Mei 2018',
    '2 night(s)',
    '1 adult(s), 0 child(s)',
    '1 room(s), 0 extra bed(s)',
    'Superior',
    'Rp. 800.000'
  ], [
    'VCBH42',
    'Coffescript',
    '085851851276',
    '9 Mei 2018',
    '11 Mei 2018',
    '2 night(s)',
    '1 adult(s), 0 child(s)',
    '1 room(s), 0 extra bed(s)',
    'Superior',
    'Rp. 800.000'
  ], [
    'VCBH42',
    'Coffescript',
    '085851851276',
    '9 Mei 2018',
    '11 Mei 2018',
    '2 night(s)',
    '1 adult(s), 0 child(s)',
    '1 room(s), 0 extra bed(s)',
    'Superior',
    'Rp. 800.000'
  ]
]

//INNER_CONFIG
const MAX_ITEMS = 5

//COMPONENT
export default class Orders extends Component {
  state = {
    tableData: tableData.slice(0, MAX_ITEMS),
    loading: false
  }

  handleChange = activePage => {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({
        tableData: tableData.slice(
          (activePage - 1) * MAX_ITEMS, (activePage - 1) * MAX_ITEMS + MAX_ITEMS
        ),
        loading: false
      })
    }, 1000)
  }

  handleSearchChange = search => {
    console.log(search)
  }

  render() {
    return (
      <Card className={styles.card} >
        <div className={styles.header} >
          <div className={styles.title} >
            <h1>Orders</h1>
            <div>
              <Label circular color="grey">{tableData.length}</Label>
            </div>
          </div>
          <Search
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            {...this.props}
          />
        </div>
        <Table
          headers={tableHeaders}
          data={this.state.tableData}
          pagination
          totalPages={Math.ceil(tableData.length / MAX_ITEMS)}
          onPageChange={this.handleChange}
          defaultWidth={500}
          loading={this.state.loading}
        />
      </Card>
    )
  }
}
