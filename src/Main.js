// bootstraping , bring react into real dom

import React from "react";

import {render} from "react-dom"; // patching done by this

import Routes from "./app/Routes";

import {HashRouter as Router} from "react-router-dom";

import store from "./app/Store";

import {Provider} from "react-redux";

//compare real and virtaul using diff algo
//patch virtual dom into real
//render(React.createElement(Routes), //virtual
//      document.getElementById("root") //real
//)

//render(<Routes/>, //virtual
//document.getElementById("root") //real
//)

render(
<Provider store={store}>
<Router>
  <Routes/>
</Router>
</Provider>, //virtual
    document.getElementById("root") //real
    )