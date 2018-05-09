//MODULES
import React, { Component } from 'react'
import { Search, Image } from 'semantic-ui-react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import axios from 'axios'

//STYLES
import styles from './css/menus.scss'

//COMPONENTS
import Card from '../../components/Card'
import Table from '../../components/Table'

//CONFIG
import { GRAPHQL_END_POINT } from '../../config'

// //STORE 
// import { token } from '../../services/stores'

const tableHeaders = [
  'Menu', 
  'Name',
  'Price (Rp.)',
]


//INNER_CONFIG
const MAX_ITEMS = 8

//COMPONENT
export default class Orders extends Component {
  state = {
    //tableData: tableData.slice(0, MAX_ITEMS),
    loading: false,
    // name: {},
    // description: {},
    // price: {},
    // image: {},
    menus: [],
    restaurant_id: 1,
    categories: []
  }

  componentDidMount() {
    axios.post(GRAPHQL_END_POINT, {
      query: `
      query {
        allRestaurantMenus (restaurant_id:"${this.state.restaurant_id}") {
          name
          description
          price
          image
        }

      }
      `
      // allCategories {
      //   name
      //   id
      // }
    }).then(({data}) => {
      if(!data) return

      //console.log(data.data.allCategories[0].name)
      this.setState({
        menus: data.data.allRestaurantMenus.map((menu)=>{
          return[
            <div className={styles.img} >
              <Image className={styles.imgMenus} src={menu.image} />
            </div>,
            <div className={styles.title}>{menu.name}<div className={styles.desc}>{menu.description}</div></div>,
            <div className={styles.delete} >{menu.price} 
              <span className={`material-icons ${styles.icon1}`}>settings</span>
              <span className={`material-icons ${styles.icon}`}>delete</span>
            </div>,
          ]
        }),

        categories: data.data.allCategories
      })

    })
  }

  // renderCategories() {
    
    
  //   return this.state.categories.map((data) => {
  //     return (
  //       <div>
  //         <Link to="/menu">{data.name}</Link>
  //       </div>
  //     )
  //   })
  // }

  handleChange = () => {
    // this.setState({loading: true})
    // setTimeout(() => {
    //   this.setState({
    //     tableData: tableData.slice(
    //       (activePage - 1) * MAX_ITEMS, (activePage - 1) * MAX_ITEMS + MAX_ITEMS
    //     ),
    //     loading: false
    //   })
    // }, 1000)
  }

  handleSearchChange = search => {
    console.log(search)
  }

  render() {
    return (
      <Card className={styles.card} >
        <div className={styles.left} >
          <Search
            size='mini'
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            {...this.props}
          />
          <div className={styles.title} >
            
            {/* {this.renderCategories()} */}
            
            <div>
              <Link to="/menu" >Makanan</Link>
            </div>
            <div>
              <Link to="/menu" >Minuman</Link>
            </div>
        
          </div>
        </div>
        <div className={styles.right} >
          <Table 
            headers={tableHeaders} 
            data={this.state.menus} 
            pagination
            totalPages={Math.ceil(this.state.menus.length / MAX_ITEMS)}
            onPageChange={this.handleChange}
            defaultWidth={500}
            loading={this.state.loading}
          />
        </div>
      </Card>
    )
  }
}
