import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'

class Transaction extends Component {

    deleteTransaction = async () => {
        await axios.delete(`http://localhost:2700/transaction/${this.props.action._id}`)
        this.props.delete(this.props.action._id)
    }
  
    render() {
        let action = this.props.action
        return (
          <div className='actionBox'>
              <div className='action actionCategory'>{action.category}</div>
              <div className={action.amount > 0 ?  'action actionAmount posPrice' : 'action actionAmount negPrice'}>{action.amount}</div>
              <div className='action avtionVendor'>{action.vendor}</div>
              <div className='action actionDelete' onClick={this.deleteTransaction}>Delete</div>
          </div>
        )
    }
}

export default Transaction;
