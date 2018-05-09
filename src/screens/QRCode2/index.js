import React, { Component } from 'react'
import QRCode from 'qrcode.react'

export default class componentName extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center', marginBottom: 50, marginTop: 50}}>TABLE SCAN</h1>
        <QRCode value="1" style={{width: 300, height: 300, margin: 'auto', marginTop: 10}} />
      </div>
    )
  }
}
