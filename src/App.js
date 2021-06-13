import React, { Component } from 'react';
import Layout from './components/commons/Layout';
import CharacterList from './pages/CharacterList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path='/character' component={CharacterList} />
        </Layout>
      </Router>
    );
  }
}

export default App;
