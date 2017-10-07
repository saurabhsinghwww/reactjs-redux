import React, {Component} from "react";

import {NavLink} from "react-router-dom";

import store from "../Store";

export default class Header extends Component {

  constructor(props) {
     super(props);
  }

  componentWillMount() {

    store.subscribe (
        () => {
            this.forceUpdate();
        }
    )
    
  }

  render() {

    let length = store.getState().cartItems.length;
    return (
        <div>
            <h2>{this.props.title}</h2>

            <div>
                <NavLink to="/" exact 
                         className="button"
                         activeClassName="success">
                         Home
                </NavLink>

                <NavLink to="/cart"  
                         className="button"
                         activeClassName="success">
                         Cart [{length}]
                </NavLink>

                <NavLink to="/products"  
                         className="button"
                         activeClassName="success">
                         Products
                </NavLink>

                <NavLink to="/go-to-cart"  
                         className="button"
                         activeClassName="success">
                         Go To Cart
                </NavLink>

                <NavLink to="/about/ncr"  
                         className="button"
                         activeClassName="success">
                         About
                </NavLink>
            </div>
        </div>
    )
   }


}