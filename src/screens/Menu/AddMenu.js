//MODULES
import React, { Component } from 'react'
import { Input, Button, Image, Dropdown } from 'semantic-ui-react'

//STYLES
import styles from './css/add-menu.scss'

//COMPONENTS
import Card from '../../components/Card'

const options = [
  { key: 'spesial', text: 'Spesial', value: '0' },
  { key: 'soups', text: 'Soups', value: '1' },
  { key: 'pasta', text: 'Pasta', value: '2' },
  { key: 'pasta', text: 'Pasta', value: '3' },
  { key: 'pasta', text: 'Pasta', value: '4' },
  { key: 'pasta', text: 'Pasta', value: '5' },
  { key: 'pasta', text: 'Pasta', value: '6' },
  { key: 'pasta', text: 'Pasta', value: '7' },
  { key: 'pasta', text: 'Pasta', value: '8' },
  { key: 'pasta', text: 'Pasta', value: '9' },
  { key: 'pasta', text: 'Pasta', value: '10' },
]

//COMPONENT
export default class AddMenu extends Component {
  state = {
    loading: false
  }

  onSubmit = e => {
    e.preventDefault()


  }

  render() {
    return (
      <Card className={styles.card} >
        <div className={styles.header} >
          <div className={styles.title} >
            <h1>Add Menu</h1>
          </div>
        </div>
      
        <form className={styles.wrapper} onSubmit={this.onSubmit} >
          <div className={styles.inputImg} >
            <label htmlFor=""></label>
            <Image src='/static/image/upload.png' size='medium' rounded />
            <div>
              <Button primary>Upload Image</Button>
            </div>
          </div>

          <div className={styles.input} >
            <label htmlFor=""></label>
            <Input label="Name" placeholder="Name" fluid />
          </div>
          
          <div className={styles.input} >
            <Input label="Desc" placeholder="Description" fluid />
          </div>

          <div className={styles.input} >
            <Input label="Price" placeholder="Price" fluid />
          </div>

          <div className={styles.input} >
            <Dropdown placeholder='Category' button fluid scrolling options={options} />
          </div>
          
          <div className={styles.button} >
            <Button primary>Add Menu</Button>
          </div>
        </form>
      </Card>
    )
  }
}
