import React, {PureComponent} from "react";
import PropTypes from "prop-types";

//requirement
//pass item as prop {id, name: '', price: 2, qty}
export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);
        // we should not change props directly
        this.state = {

          qty: props.item.qty

        }

        
    }
    
    componentDidMount() {
        
    }

    onValueChange(e) {
 
        let {value} = e.target;

        // asynchronous set state 
        //trigger render method asynchornously
        this.setState({
            qty: value
        })
    }
    
    render() {
        let item = this.props.item;

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <input value={this.state.qty} 
                           type="number"
                           onChange={(e) => this.onValueChange(e)}  />
                </td>
                <td>

                    State Qty:  
                    {item.price * this.state.qty}
                    <br/>
                    Props Qty: 
                    {item.price * this.props.item.qty}
                </td>

                <td>
                    <button onClick={ () => this.props.onUpdate(item.id, this.state.qty)}>
                        Update
                    </button>
                </td>

                <td>
                    <button onClick={ () => this.props.onRemove(item.id)}>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}