import React, { Component } from "react";
import Layout from "./components/commons/Layout";
import CharacterList from "./pages/CharacterList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterProvider from "./context/CharacterProvider";

class App extends Component {
  render() {
    return (
      <Router>
        <CharacterProvider>
          <Layout>
            <Route exact path="/character" component={CharacterList} />
          </Layout>
        </CharacterProvider>
      </Router>
    );
  }
}

export default App;
