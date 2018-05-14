import React, { Component } from 'react';
import axios from 'axios';

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
        this.setState({
          data: res.data.data,
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
          <ScreenContent data={data} header='History'/>
        </div>
      )
    }
  }
}

export default Orders;
