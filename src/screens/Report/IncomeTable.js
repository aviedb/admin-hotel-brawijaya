//MODULES
import React, { Component } from 'react'
import { Search, Label } from 'semantic-ui-react'
import _ from 'lodash'

//STYLES
import styles from './css/income-table.scss'

//COMPONENTS
import Card from '../../components/Card'
import Table from '../../components/Table'

const tableHeaders = [
  'Product',
  'Quantity',
  'Income',
]

const tableData = [
  [
    'Sate Ayam',
    '30',
    '300.000',
  ],
  [
    'Sate Ayam',
    '30',
    '300.000',
  ],
  [
    'Sate Ayam',
    '30',
    '300.000',
  ],
  [
    'Sate Ayam',
    '30',
    '300.000',
  ],
  [
    'Sate Ayam',
    '30',
    '300.000',
  ],
  [
    'Sate Ayam',
    '30',
    '300.000',
  ],
]

//INNER_CONFIG
const MAX_ITEMS = 5

//COMPONENT
export default class IncomeTable extends Component {
  state = {
    tableData: tableData.slice(0, 5),
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
            <h1>Income</h1>
            <div>
              <Label circular color="grey">2</Label>
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
