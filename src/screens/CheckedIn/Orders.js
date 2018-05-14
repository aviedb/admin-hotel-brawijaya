import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import ScreenContent from '../ScreenContent';

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('https://api.brawijaya-hotel.ngopi.men/reservations')
      .then(res => {
        const now = moment().valueOf();
        const filteredData = res.data.data.filter(data => {
          return moment(data.check_out).valueOf() >= now && moment(data.check_in) <= now;
        });

        this.setState({
          data: filteredData,
          loading: false
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  render() {
    const { loading, data } = this.state;

    if(loading) {
      return (
        <h1>Loading</h1>
      )
    }
    else {
      return (
        <div>
          <ScreenContent data={data} header='Checked-in'/>
        </div>
      )
    }
  }
}

export default Orders;
