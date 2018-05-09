//MODULES
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

//ASSETS
// import logo from './logo.svg'
// import { Sidebar, Fragment, Menu, Image } from 'semantic-ui-react'

//STYLES
import styles from './css/index-report.scss'

//COMPONENTS
import LeftBar from '../../components/LeftBar'
import TopBar from '../../components/TopBar'
import IncomeTable from './IncomeTable'
import IncomeChart from './InocmeChart'

//COMPONENT
class App extends Component {
  render() {
    return (
      <div className={styles.container} >
        <TopBar />
        <LeftBar />

        <div className={styles.content} >
          <IncomeTable />
          <IncomeChart />
        </div>
      </div>
    )
  }
}

export default App
