import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    
    //Creation : stage 1
    //part of creational life cycle
    constructor(props) {
        super(props);
        console.log("Summary Created");

        this.state = {

            discount: props.amount * .30
        }

        // batch update happen when we call set update

    }

    //part of update life life
    componentWillReceiveProps(nextProps) {
        
        console.log("Next Props, Current Amount", this.props.amount);
        console.log("Next Props, Next Amount", nextProps.amount);

        this.setState({

            discount: nextProps.amount * .30
        })
        
    }
    
    //part of creational life cycle
    //Creation : stage 2
    componentWillMount() {

        console.log("componentWillMount");// take virtual dom and put into real dom: mounting
    }

    //part of update life life
    shouldComponentUpdate(nextProps, nextState) {
        
                console.log("shouldComponentUpdate");

               
        if (this.props.amount != nextProps.amount || 
            this.state.discount != nextState.discount) {
                return true;
        }

        console.log("no render called");

                return false;
                //after this merge of current state with prev state
    }

    //part of update life life
    //after this merge of current state with prev state
    componentWillUpdate(nextProps, nextState) {
        
       console.log("componentWillUpdate");// take virtual dom and put into real dom: mounting
    }

    //part of creational life cycle
    // Created Stage 4
    componentDidMount() {
        console.log("componentDidMount");
        console.log("View displayed, after render");
    }

    //part of update life life    
    componentDidUpdate(prevProps, prevState) {
        
        console.log("componentDidUpdate");
    }
    

    // Creation Stage 3
    //Return a view
    //part of update life life
    //part of creational life cycle
    render() {
        console.log("Summary render");
        return (
            <div> 
                 {this.props.children}
            <h2>Cart Summary -  {this.props.amount}</h2>
            <h2>Cart Discount -  {this.state.discount}</h2>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}