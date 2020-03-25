import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Transaction from './Transaction'

class Transacrions extends Component {
    
    deleteTransaction = tId => {
        this.props.delete(tId)
    }

    getBalance = () =>{
        return this.props.balance()
    }

    render() {
        return (
            <div id='transactionPage'>
                <div id='transTitles'>
                    <div>Transacrions:</div>
                    <div >Balance: <span className={this.getBalance() > 0 ? 'posPrice' : 'negPrice'}>{this.getBalance()}</span></div>
                </div>
                <div id='transactionsBox'>
                    {this.props.actions.map(a => {return <Transaction key={a._id} delete={this.deleteTransaction} action={a}/>})}
                </div>
            </div>
        )
    }
}

export default Transacrions;
