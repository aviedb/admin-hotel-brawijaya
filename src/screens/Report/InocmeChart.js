//MODULES
import React, { Component } from 'react'
import { Dropdown, Label } from 'semantic-ui-react'

//STYLES
import styles from './css/income-table.scss'
import styles2 from './css/income-chart.scss'

//COMPONENTS
import Card from '../../components/Card'
// import Table from '../../components/Table'
import { Line } from 'react-chartjs-2'

const tableData = [
  120000,
  300000,
  150000,
  200000,
  100000,
  500000,
  800000,
]

//INNER_CONFIG
const MAX_ITEMS = 5

//COMPONENT
export default class IncomeChart extends Component {
  state = {
    loading: false
  }

  handleChange = activePage => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({
        tableData: tableData.slice(
          (activePage - 1) * MAX_ITEMS, (activePage - 1) * MAX_ITEMS + MAX_ITEMS
        ),
        loading: false
      })
    }, 1000)
  }

  handleSearchChange = search => {
    console.log(search)
  }

  render() {
    return (
      <Card className={styles.card + ' ' + styles2.container} >
        <div className={styles.header} >
          <div className={styles.title} >
            <h1>Income</h1>
            <div>
              <Label circular color="grey">2</Label>
            </div>
          </div>
          <div className={styles.options} >
            <Dropdown fluid selection defaultValue="monthly" placeholder="sort" options={[
              {
                text: 'Monthly',
                value: 'monthly',
              },
              {
                text: 'Daily',
                value: 'daily',
              },
              {
                text: 'Yearly',
                value: 'yearly',
              },
            ]} />
          </div>
        </div>
        <Line
          data={
            {
              labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul'],
              datasets: [{
                label: 'Monthly income (in thousands)',
                data: tableData.map(v => v / 1000),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            }
          }
        />
      </Card>
    )
  }
}
