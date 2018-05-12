//MODULES
import React, { Component } from 'react'
import { Search, Label } from 'semantic-ui-react'
import _ from 'lodash'
import axios from 'axios';

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

//INNER_CONFIG
const MAX_ITEMS = 5

//COMPONENT
export default class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: [],
      tableData: [],
      loading: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const URL = 'https://api.brawijaya-hotel.ngopi.men/reservations';

    axios.get(URL)
      .then(res => {
        let allData = res.data.data.map(data => {
          const {
            id,
            customer_name,
            phone,
            check_in,
            check_out,
            adult_capacity,
            children_capacity
          } = data;

          return [id, customer_name, phone, check_in, check_out];
        });

        this.setState({
          allData,
          tableData: allData.slice(0, MAX_ITEMS)
        });
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  handleChange = activePage => {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({
        tableData: this.state.allData.slice(
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
    const { allData } = this.state

    return (
      <Card className={styles.card} >
        <div className={styles.header} >
          <div className={styles.title} >
            <h1>Reservations</h1>
            <div>
              <Label circular color="grey">{allData.length}</Label>
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
          totalPages={Math.ceil(allData.length / MAX_ITEMS)}
          onPageChange={this.handleChange}
          defaultWidth={500}
          loading={this.state.loading}
        />
      </Card>
    )
  }
}
