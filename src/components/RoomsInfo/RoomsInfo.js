import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

import Table from '../Table';
import styles from './style.scss';

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
      return [
        room.name,
        room.type,
        room.extra_bed,
        room.price
      ];
    });

    this.setState({
      tableData
    });
  }

  handleChange() {

  }

  render() {
    return (
      <Modal trigger={<Button>More</Button>}>
        <Modal.Header>Room(s)</Modal.Header>
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
