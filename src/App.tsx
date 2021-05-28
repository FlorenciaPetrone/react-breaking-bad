//React
import React from "react";
import { Route, Switch } from "react-router-dom";
//Components
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="body-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorite" component={Favorite} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
