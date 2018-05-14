import React, { Component } from 'react';
import axios from 'axios';

import ScreenContent from '../ScreenContent';
import styles from './style.scss';

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
        <div className={styles.loading}>
          Loading ...
        </div>
      )
    }
    else {
      return (
        <div>
          <ScreenContent data={data} header='History' reverse='true' />
        </div>
      )
    }
  }
}

export default Orders;
