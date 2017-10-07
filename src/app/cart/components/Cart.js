
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props, context) {
        super(props);

        // initialize state

        this.state = {
         
            items: [],
            amount: 0,
            reload: true, //temp

        }

        console.log(context.theme);

    }

    getChildContext() {

        return {

            offer: "30% offer"
        }
    }

    
    addItem() {
        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            name: "Product " + id,
            qty: 1,
            price: Math.ceil(Math.random() * 1000)
        }
        
        //bad, mutable
        //this.state.items.push(item);

        //immutable
        //let clone = [...this.state.items, item];

        /*this.setState({

             items: clone

        }, () => {
            this.reCalculateAmount(); 
            // callback will be called after successfully updating the state

        })
        */

        //bad
        //this.forceUpdate(); // call the render method internally

        //console.log("Item added", id);
        this.props.addItemToCart(item); 

        
    }

    reCalculateAmount() {
        let total = 0;
        for (let item of this.state.items) {
            total += item.price * item.qty
        }

        this.setState({
            amount: total
        })

        console.log("Statem Amount", this.state.amount);
        console.log("Actual", total);
    }

    removeItem(id) {

        this.setState({

            items: this.state.items.filter((item) => {
                
                return item.id != id;
    
            })
        }, () => {
            this.reCalculateAmount();
        });
    }
    
    updateItem(id, qty) {
        
        let items = this.state.items.map( item => {
            if (id != item.id)
                return item;

            //bad, mutablity
            //item.qty = qty;

            //immutable
            return Object.assign({}, item, {qty: qty});
        });

        this.setState({
            items: items
        }, () => {
            this.reCalculateAmount();
        })
    }

    emptyCart() {

        this.setState({
            items: []
        })

    }

    refresh() {

        this.setState({
            reload: !this.state.reload
        })
    }

  
    
    componentWillMount() {
        
        console.log("Actual");
    }

    componentWillUpdate() {
        
    }

    componentDidMount() {
        
    }
    
    render() {// internally run diff algo
        return (
            <div> 
            <h2>Cart [{this.state.items.length}] </h2>

            <button onClick={ () => this.addItem() }>
                Add
            </button>

            <button onClick={ () => this.refresh() }>
                Refresh
            </button>

            <CartList items={this.state.items} 
                      onRemove={ (id) => this.removeItem(id)}
                      onUpdate={ (id, qty) => this.updateItem(id, qty)}
                      />

            <CartSummary amount={this.state.amount}>
                <h2>Summary Page through parent: {this.state.amount} </h2>                
            </CartSummary> 
            </div>
        )
    }
} 

Cart.propTypes = {
    
}

Cart.childContextTypes = {
    offer: PropTypes.string
}


Cart.contextTypes = {
    
        theme: PropTypes.string
    
    }

/*

// HTML5 broswer history

main: index.js,  file executed if import as library

registry.npmjs.org

import and export from ES6

exports and require -> common  js specification (every javascript is a module, local to the file), implented by node js
, global.myname (for creating global variables)

exports.add = add(a, b) {}

component: html + js + css

ES6 is complete systatical sugar


in class this is explicit

ES6 , variable can't define in side class, no memeber variables, no private variable (should use underscope),
 only one constructer



set name(abc) { => obj.name = "ABC"; call set


Arrow Operater:
n + n*n

let add = (a,b) => a+b ; // return not needed
let add = (a,b) => {  a+b };//return required
let add = (a,b) => {  return a+b };

preserve this can use in set interval 

set interval call by timer object, can use that

Template literal

` Mr ${Saurabh} `

multiline string

` <div>
  <an>
`


export and import

only one default, no curly brace while improtign

Promises, Map and Set, map filter, Object.assign



ES7

Array.propoty.includes
Export oerators 2**3 => 8


ES8
async and await while working with promisses

ES NExt

@ decoraters


1. Babel for converting ESx to ES5 using different plugin

npm global,  not recomended 

npm global, does npm install not update global?

^ but get latest minor or patch



"main": "index.js", // file executed if exported as library
dev dependecies //not used in directly in project, will not import it
babel-ES6//plugin for ES6 to ES5




WEbpack

Bundel file



Questions;
1. stage 2
2. react component vs web component
3. how to enable browser to cache




*/


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}

/*

Whenever parent method called-> componentWillReceiveProps (if data change or not)


// Pure component implements shouldComponentuPDATE ALREADY


*/