
import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
//for SEO, Title bar update
import {Helmet} from "react-helmet";


import ProductWidget from "../containers/ProductWidget";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    // setStateBad(products) {
    //     this.setState({
    //         products: products
    //     })

    // }


    componentDidMount() {

        // async method
        this.props.actions.fetchProducts();
        
        
                //TODO: get data from server
                //clear any previous error
               
        
    }

    goToCart() {

        this.props.history.push("/cart");   
    }

    componentDidMount1() {
        //TODO: get data from server
        // service.getProducts()
        // .then( products => {
            
        //     //ProductList.prototype.setStateBad.call(this, products)
        //     ProductList.prototype.setStateBad.apply(this, [products])
        //     /*this.setState({
        //         products: products
        //     })*/
        // })

        

    }

   
     
    render() {


        if (this.props.error) {
 
         return(
             <h2> Errors: {this.props.error.toString()} </h2>
         )

        };

        if (this.props.loading) {
            
                    return(
                        <h2>Loading...</h2>
                    )
           
        };

        //TODO: pull data from server
        let products = this.props.products;

        let list= products.map ( product => (
                    <ProductWidget key={product.id} product={product}>
                    {product.name}
                    </ProductWidget>
                ))

        return (
                
            <div>
                    <Helmet>
                    <title>Products List</title>
                    </Helmet>

                    <button  onClick={()=> this.goToCart()}>
                        Cart 
                    </button>

                
                <div className="flex two">
                    {list}
                </div>
            </div>

        )
    }
} 


ProductList.defaultProps = {

    products: []
    
}

ProductList.propTypes = {
    
}
