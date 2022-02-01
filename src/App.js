//---------LIBRARIES-------
import React from "react";
import { Route } from "react-router-dom";
//-------------------------

//--------HOOKS-----------
//-------------------------

//---------ACTIONS---------
//-------------------------

// -------COMPONENTS-------
import { Cart, Header, MainBlock, NavBar } from "./components";
//-------------------------

//--------STYLES-----------
import "./App.css";
//-------------------------

console.log('jopa');
const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <Route
          render={() => <NavBar/>}
          path="/mainPage"
        />

        <Route component={Cart} path="/cartPage" exact />
        <Route component={MainBlock} path="" exact />
      </div>
    </div>
  );
};

export default App;
