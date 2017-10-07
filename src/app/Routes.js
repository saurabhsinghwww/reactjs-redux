// routes configuation

import React from "react";// need to import because of JSX
import {Route,
        Redirect,
        Switch} from "react-router-dom";

import {App} from "./App";
import Home from "./components/Home";
import About from "./components/About";

import NotFound from "./components/NotFound";



//import Cart from "./cart/components/ReduxCart";
//import Cart from "./containers/Cart";
//import HOC from "./cart/components/HOC";

import ProductRoutes from "./product/Routes";

import Loadable from 'react-loadable';

function Loading() {
    return (
        <div>Loading ...</div>
    )
}

const LoadableCartComponent = Loadable({
    loader: () => import('./containers/Cart'),
    loading: Loading,
});

export default function Routes() {
    return (
        
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />

                    <Route path="/products">
                      <ProductRoutes title="Product" >
                      </ProductRoutes>
                    </Route>

{/*                     <Route path="/cart" exact  >
                            <HOC component={Cart} />
                    </Route>

 */}

 <Route path="/cart" exact component={LoadableCartComponent} >
                    </Route>
                    
                    <Route path="/about/:team" component={About} />

                    <Redirect path="/go-to-cart" to="/cart" />

                    <Route path="*" component={NotFound} />

                </Switch>
            </App>
       
    )
}