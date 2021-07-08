import React, { Component } from "react";
import Layout from "./components/commons/Layout";
import CharacterList from "./pages/characterList/CharacterList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharacterProvider from "./context/CharacterProvider";
import EpisodeList from "./pages/episodeList/EpisodeList";

class App extends Component {
  render() {
    return (
      <Router>
        <CharacterProvider>
          <Layout>
            <Route exact path="/character" component={CharacterList} />
            <Route exact path="/episode" component={EpisodeList} />
          </Layout>
        </CharacterProvider>
      </Router>
    );
  }
}

export default App;
