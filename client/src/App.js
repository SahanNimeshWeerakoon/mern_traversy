import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Container } from 'reactstrap'
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemModal from './components/ItemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
