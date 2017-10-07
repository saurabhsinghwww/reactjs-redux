import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    shouldComponentUpdate2(nextProps) {

      console.log("Cart list should update");
      console.log("Equals", this.props.items == nextProps.items);

        if (this.props.items != nextProps.items) {
            console.log("Cart list render");
            return true;
        }

        console.log("No cart list render");

        return false;


    }
    
    render() {

        console.log("Cart list render");
       let {items} = this.props;

       let rows = items.map(  (item, index) =>
          
          <CartItem item={item} 
                    key={item.id}
                    onRemove={this.props.onRemove}
                    onUpdate={this.props.onUpdate}/>

       );

        return (
           <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                    
                    {rows}
                    
                </tbody>
            </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}