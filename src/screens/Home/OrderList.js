//MODULES
import React, { Component } from 'react'
import { Search, Label, Button } from 'semantic-ui-react'
import _ from 'lodash'

//STYLES
import styles from './css/order-list.scss'

//COMPONENTS
import Card from '../../components/Card'
import Table from '../../components/Table'
import ListDesc from '../../components/ListDesc'

const tableHeaders = [
  'Item Name',
  'Quantity',
  'Note',
]

const tableData = [
  [
    'Sate Ayam',
    1,
    <div className={styles.delete} >- <span className={`material-icons ${styles.icon}`}>delete</span></div>,
  ],
  [
    'Soto Ayam',
    2,
    <div className={styles.delete} >- <span className={`material-icons ${styles.icon}`}>delete</span></div>,
  ],
  [
    'Es Jeruk',
    4,
    <div className={styles.delete} >- <span className={`material-icons ${styles.icon}`}>delete</span></div>,
  ],
  [
    'Es Teh',
    1,
    <div className={styles.delete} >- <span className={`material-icons ${styles.icon}`}>delete</span></div>,
  ],
  [
    'Soto Ayam',
    2,
    <div className={styles.delete} >- <span className={`material-icons ${styles.icon}`}>delete</span></div>,
  ],
  [
    'Soto Kambing',
    1,
    <div className={styles.delete} >- <span className={`material-icons ${styles.icon}`}>delete</span></div>,
  ],
  [
    'Soto Sate',
    2,
    <div className={styles.delete} >- <span className={`material-icons ${styles.icon}`}>delete</span></div>,
  ],
  [
    'Soto Ayam Spesial',
    1,
    <div className={styles.delete} >- <span className={`material-icons ${styles.icon}`}>delete</span></div>,
  ],
]

//INNER_CONFIG
const MAX_ITEMS = 5

//COMPONENT
export default class OrderList extends Component {
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
            <h1>Order List</h1>
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
        <div className={styles.middle} >
          <div className={styles.desc} >
            <ListDesc data={
              [
                ['Order Number', 'SC001'],
                ['Name', 'Zain Fikri H'],
                ['Table', '12'],
              ]
            } />
          </div>

          <div className={styles.cancel} >
            <Button negative>Cancel</Button>
          </div>
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
