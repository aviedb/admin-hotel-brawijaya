import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

import Table from '../Table';
import styles from './style.scss';

const style = {
  button: {
    fontFamily: 'Google Sans',
    fontWeight: 400
  }, header: {
    fontFamily: 'Google Sans'
  }
}

export default class RoomsInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: [],
      tableHeader: [
        'Room Name',
        'Type',
        'Extra Bed',
        'Price'
      ]
    }
  }

  componentDidMount() {
    this.updateTableData();
  }

  updateTableData() {
    const tableData = this.props.rooms.map(room => {
      const extraBed = room.extra_bed>0?<i className="fas fa-check"></i>:'';

      return [
        room.name,
        room.type,
        extraBed,
        `Rp. ${room.price}`
      ];
    });

    this.setState({
      tableData
    });
  }

  render() {
    return (
      <Modal trigger={<Button circular compact style={style.button}>Details</Button>}>
        <Modal.Header style={style.header}>Details</Modal.Header>
        <Modal.Content>
          <Table
            headers={this.state.tableHeader}
            data={this.state.tableData}
            defaultWidth='100%'
            marginTop='-60px'
          />
          <Modal.Description>
            <Header></Header>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
