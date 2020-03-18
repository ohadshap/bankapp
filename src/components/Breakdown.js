import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'


class Breakdown extends Component {
    constructor(props) {
        super()
        this.transactions = props.actions
    }

    filterByCategory = category => {
        return this.transactions.filter(t => t.category == category) 
    }

    filterByVendor = vendor => {
        return this.transactions.filter(t => t.vendor == vendor) 
    }

    getCategories = () => {
        let categories = {}
        let list = []
        // console.log(this.transactions);
        this.transactions.forEach(t => {
            if(categories[t.category]) {
                categories[t.category] += t.amount
            } else {
                categories[t.category] = t.amount
                list.push(t.category)
            }
        })
        // console.log(categories);
        return {list , categories }
    }

    orgenizeByPrice = () => {
        let categories = this.getCategories().categories
        let exp = []
        let sortedList = []
        for(let i in categories) {
           exp.push(categories[i])
        }
        exp.sort((a, b) => b - a)
        for(let i = 0; i < exp.length; i++) {
            for(let j in categories) {
                if(categories[j] == exp[i]) {
                    sortedList.push(j)
                }
            }
        }
        // console.log(sortedList);
        return sortedList
    }

    

    getBalance = () => {
        return this.props.balance()
    }

    render() {
        let breakdownData = this.getCategories()
        let sortedList = this.orgenizeByPrice()
        return (
            <div id='breakdownBox'>
                
                <div id='breakdownTitles'>
                    <span id='filterTitle'>Filtered by categories</span>
                    <span></span>
                    <span id='breakdownBalance'>Balance: <span className={this.getBalance() > 0 ? 'posPrice' : 'negPrice'}>{this.getBalance()}</span></span>
                </div>    
                
                <div id='breakdownList'>
                    {sortedList.map(c => {
                        return (
                            <div key={c} className='categoryList'>
                                <span className='listItem'>{c + ' :'}</span>
                                <span className={breakdownData.categories[c] > 0 ? 'posPrice listPrice' : 'negPrice listPrice'}>{breakdownData.categories[c]}</span>
                                {/* <span className='barLength' style={{width: `${c * 3}` + 'px'}}>{breakdownData.categories[c]}</span> */}
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Breakdown