import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Transactions from './Transactions'
import axios from 'axios'

class Operations extends Component {

  
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }

    
    handleAmount = event => {
        this.setState({amount: event.target.value});
    }

    handleVendor = event => {
        this.setState({vendor: event.target.value});
    }

    handleCategory = event => {
        this.setState({category: event.target.value});
    }

    getBalance = () =>{
        return this.props.balance()
    }

    deposit = () => {
        if(this.state.amount.length > 0 && this.state.vendor.length > 0 && this.state.category.length > 0) {
            
            axios({
                method: 'post',
                url: 'http://localhost:2700/transaction',
                headers: {}, 
                data: { 
                    amount: 100,
                    vendor: 'rami',
                    category: 'foods' }
            })
            this.props.deposit(this.state.amount, this.state.vendor, this.state.category)
            this.setState({
                amount: "",
                vendor: "",
                category: ""
            });
        }
    }

    withdraw = () => {
        if(this.state.amount.length > 0 && this.state.vendor.length > 0 && this.state.category.length > 0) {
            if(this.state.amount < this.getBalance()) {
                
                axios({
                    method: 'post',
                    url: 'http://localhost:2700/transaction',
                    headers: {}, 
                    data: { 
                        amount: this.state.amount,
                        vendor: this.state.vendor,
                        category: this.state.category }
                })
                this.props.withdraw(this.state.amount, this.state.vendor, this.state.category)
                this.setState({
                    amount: "",
                    vendor: "",
                    category: ""
                });

            } else {
                alert('you poor bag go to work!')
            }
        }
    }

    render() {
        return (
            <div id='operationBox'>
                <div><input id="amount-input" value={this.state.amount} onChange={this.handleAmount} placeholder="Enter amount" /></div> <br></br>
                <div><input id="vendor-input" value={this.state.vendor} onChange={this.handleVendor} placeholder='Enter vendor'/></div> <br></br>
                <div><input id="category-input" value={this.state.category} onChange={this.handleCategory} placeholder='Enter category'/></div> <br></br>
                <div className='button'><Link to='/transactions' style={{ textDecoration: 'none', color: 'green' }}><div onClick={this.deposit}>Deposit</div></Link></div><br></br>
                <div className='div'><Link to='/transactions' style={{ textDecoration: 'none', color: 'red' }}><div onClick={this.withdraw}>Withdraw</div></Link></div>
            </div>
        );
    }
}

export default Operations;
