import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import axios from 'axios'
// import { Dimmer, Loader } from 'semantic-ui-react'
// import Table from '../../components/Table'

//CONFIG
import { GRAPHQL_END_POINT } from '../../config'

export default class componentName extends Component {
  componentDidMount() {
    this.fetchToken()
  }

  componentWillUnmount() {
    this.setState({unmounted: true})
  }

  fetchToken() {
    axios.post(GRAPHQL_END_POINT, {
      query: `
        query {
          currentRestaurantAdmin {
            verification_token
          }
        }
      `
    }).then(({data}) => {
      if (this.state.unmounted) return

      this.setState({isLoading: false, error: !data ? 'Failed to fetch QR Code' : ''})
      if (!data) return

      let uuid = data.data.currentRestaurantAdmin.verification_token
      this.setState({uuid})
      setTimeout(() => {
        this.fetchToken()
      }, 1000)
    }).catch(err => {
      if (this.state.unmounted) return
      console.log(err)
      this.setState({error: 'Failed to fetch QR Code'})
    })
  }

  state = {
    isLoading: false,
    uuid: null,
    unmounted: false,
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center', marginBottom: 50, marginTop: 50}}>Aneka Sate</h1>
        <QRCode value={this.state.uuid} style={{width: 300, height: 300, margin: 'auto', marginTop: 10}} />
      </div>
    )
  }
}
