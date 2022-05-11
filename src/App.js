import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Hearder/Hearder";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container"></div>

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetail} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
