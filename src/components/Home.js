import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import BarOfChart from './Barofchart'

class Home extends Component {

    getBalance = () =>{
        return this.props.balance()
    }

    render() {
        return (
            <div id='homeBox'>
                <div>Home Page</div>
                <div>Balance: <span className={this.getBalance() > 0 ? 'posPrice' : 'negPrice'}>{this.getBalance()}</span></div>
                <div id='chart'>
                    <BarOfChart />
                </div>

            </div>
        )
    }
}

export default Home