import {connect} from "react-redux";

import Header from "../components/Header";

import {withRouter} from "react-router-dom";
//whenever change in navigation call render method automatically

//@withRouter come in ESNext (decorater)
//state = store.getState()
//called for every subscribe
function mapReduxStateToReactProps(state) {

    return {

        cartLength: state.cartItems.length
    }

}

let connectFn = connect(mapReduxStateToReactProps);

//HeaderContainer is a Pure Component (implement should component update for doing shallow comparision)
let HeaderContainer = connectFn(Header);

export default withRouter(HeaderContainer);