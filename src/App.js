import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Transactions from './components/Transactions'
import Transaction from './components/Transaction'
import Operations from './components/Operations'
import Breakdown from './components/Breakdown'
import Home from './components/Home'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
    }
  }

  async componentDidMount() {
    const transactions = await this.getTransactions()
    // console.log(transactions.data);
    this.setState({
      transactions: transactions.data })
  }

  getTransactions = () => {
    return axios.get('http://localhost:2700/transactions')
  }



  printTrans = () => {
    console.log(this.state.transactions)
  }

  getBalance = () => {
    let sum = 0
    this.state.transactions.forEach(a => {sum += a.amount})
      return sum
  }

  

   deleteTransaction = tId => {
    let newActions = [...this.state.transactions]
    newActions.splice(newActions.findIndex(i => i._id == tId), 1)
    this.setState({transactions: newActions})
  }


  deposit = (amount, vendor, category) => {
    let newTransactions = [...this.state.transactions]
    amount = parseInt(amount)
    let action = { amount, vendor, category }
    newTransactions.push(action)
    this.setState({
      transactions: newTransactions,
    })
  }


  withdraw = (amount, vendor, category) => {
    this.deposit(-amount, vendor, category)
  }

          

  render() {
    return (
    
      <Router>
      <div className="App">
        <div id="main-links">
          {/* Main Links */}
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox"></input>
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <li><Link to="/">Home  </Link></li>
                <li><Link to="/breakdown">Breakdown  </Link></li>
                <li><Link to="/transactions">Transactions  </Link></li>
                <li><Link to="/operations">Operations  </Link></li>
              </ul>
            </div>
          </nav>
        </div>
        {/* Routes go here v */}

        <Route path="/" exact render={() => <Home balance={this.getBalance} />}/>
        <Route path="/breakdown" exact render={() => <Breakdown balance={this.getBalance} actions={this.state.transactions}/>}/>
        <Route path="/transactions" exact render={() => <Transactions balance={this.getBalance} delete={this.deleteTransaction} actions={this.state.transactions}/>} />
        <Route path="/operations" exact render={() => <Operations balance={this.getBalance} withdraw={this.withdraw} deposit={this.deposit}/>}/>
        {/* Routes go here ^ */}
      </div>
      </Router>  
    )
  }
   
}

export default App;
