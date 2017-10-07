import React from "react";
import PropTypes from "prop-types";

import Header from "./containers/Header";
import Footer from "./components/Footer";

import Cart from "./cart/components/Cart";

export class App extends React.Component {

    getChildContext() {

        return {
            theme: "white"
        }

    }

    // returns a view
    // returns a virtual dom
   render() {
// <h1 id="header"> React App</h2>
// JSX, embed html in javascript code (not exactly HTML), preset react plugin
      
       /*
       return React.createElement(
               'h1', 
               
                 {id: 'header'},
                 "React App"

       )

       <Footer year={2017}/> // for number or any object instead of string 
       */

       return (
           <div>
              
                <Header title="React App"/>                                  
                
                <div>
                  {this.props.children}
                </div>

                <Footer year={2017} company="Sapient"/>
                
           </div>
       );

   }

}

App.childContextTypes = {

  theme: PropTypes.string

}