import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import store from "./store";
import Details from "./Details";
import Results from "./Results";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
