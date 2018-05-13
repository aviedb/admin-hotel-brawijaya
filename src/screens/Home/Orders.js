//MODULES
import React, { Component } from 'react';
import { Search, Label } from 'semantic-ui-react';
import _ from 'lodash';
import axios from 'axios';
import moment from 'moment';

//STYLES
import styles from './css/orders.scss';

//COMPONENTS
import Card from '../../components/Card';
import Table from '../../components/Table';
import RoomsInfo from '../../components/RoomsInfo';

const tableHeaders = [
  'Booking Code',
  'Name',
  'Phone',
  'Check-in',
  'Duration',
  'Guest(s)',
  'Room(s)',
  'Total Price'
];

//INNER_CONFIG
const MAX_ITEMS = 8;

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
    axios.get('https://api.brawijaya-hotel.ngopi.men/reservations')
      .then(res => {

        const sortedData = _.sortBy(res.data.data, o => moment(o.check_in).valueOf());
        const allData = sortedData.map(data => {
          const {
            id,
            customer_name,
            phone,
            check_in,
            check_out,
            adult_capacity,
            children_capacity,
            rooms
          } = data;

          // CALCULATE DURATION
          const check_inDate = moment(check_in).valueOf();
          const check_outDate = moment(check_out).valueOf();
          const duration = (check_outDate - check_inDate) / 86400000;

          // PRETTIFY GUESTS
          const adultGuests = `${adult_capacity} ${adult_capacity>1?'adults':'adult'}`;
          const childGuests = `${children_capacity} ${children_capacity>1?'children':'child'}`;

          // CALCULATE TOTAL PRICE
          let totalPrice = 0;
          rooms.map(room => {
            return totalPrice += room.price;
          });

          return [
            id,
            customer_name,
            phone,
            moment(check_inDate).format('D MMM YYYY'),
            `${duration} ${duration>1?'days':'day'}`,
            `${adultGuests}${children_capacity>0?' & '+childGuests:''}`,
            <RoomsInfo rooms={rooms}/>,
            `Rp. ${totalPrice}`
          ];
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
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({
        tableData: this.state.allData.slice(
          (activePage - 1) * MAX_ITEMS, (activePage - 1) * MAX_ITEMS + MAX_ITEMS
        ),
        loading: false
      });
    }, 1000);
  }

  handleSearchChange = search => {
    console.log(search);
  }

  render() {
    const { allData, tableData, loading } = this.state;

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
          data={tableData}
          pagination
          totalPages={Math.ceil(allData.length / MAX_ITEMS)}
          onPageChange={this.handleChange}
          defaultWidth='100%'
          loading={loading}
        />
      </Card>
    )
  }
}
