
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

import * as actions from "../Actions";

import store from "../../Store";

export default class ReduxCart extends Component {
    constructor(props) {
        super(props);

    }

    getChildContext() {
        return {
            offer: "30% offer"
        }
    }
    
    componentDidMount() {
        
         this.unsubscribe = store.subscribe( () => {

            this.forceUpdate();
         })

    }

    componentWillUnmount() {
        
         this.unsubscribe();

    }

    addItem() {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id: id,
            name: "Product " + id,
            price: Math.ceil(Math.random() * 1000),
            qty: 1
        }

        let action = actions.addItemToCart(item);

        store.dispatch(action);

          
    }

    removeItem(id) {
         
    }

    updateItem(id, qty) {
        
        
    }

    emptyCart() {
       
    }


    refresh() {
    }



    
    render() {
        //todo: get from redux
        let items = store.getState();

        return (
            <div> 
            <h2>Cart </h2>

            <button onClick={ ()=> this.addItem()} >
                Add
            </button>


            <button onClick={ ()=> this.refresh()} >
                Refresh
            </button>

 
            <CartList items={items}
            
                      onRemove={(id) => this.removeItem(id)}
                      onUpdate = {(id, qty) => this.updateItem(id, qty)}
             />

            <CartSummary amount={0} >
               
            </CartSummary> 
            </div>
        )
    }
} 


ReduxCart.defaultProps = {
    
}

ReduxCart.propTypes = {
    
}

ReduxCart.childContextTypes = {
    offer: PropTypes.string
}