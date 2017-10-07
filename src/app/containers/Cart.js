
import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import ReduxCart from "../cart/components/ReduxCart";
import * as actions from "../cart/Actions";



function reCalculateAmount(items) {
   let total = 0;
   for (let item of items) {
       total += item.price * item.qty
   }
 
   return total;
}

const mapStateToProps = (state) => {
   return {
        items: state.cartItems,

        //FIXME: reselect, computed value
        //called for every subscribe
        amount: reCalculateAmount(state.cartItems)
   }
}
/*
//Options 1
const mapDispatchToProps = (dispatch) => {
   return {
        //prop Name: function
        addItemToCart: (item) => dispatch(actions.addItemToCart(item))
   }
}
*/

//Options 2 == Option 1
const mapDispatchToProps = (dispatch) => {
    return {
         //prop Name: function
         addItemToCart: bindActionCreators(actions.addItemToCart, dispatch),

         // actions {addItemToCart, removeItem....}
         actions: bindActionCreators(actions, dispatch)
    }
 }

export default connect(mapStateToProps, 
                   mapDispatchToProps) (ReduxCart)