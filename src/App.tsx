import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { Footer, Header, Router } from './components';
import { setupStore } from './redux/store/store';

const store = setupStore();

const App = () => (
  <Provider store={store}>
    <Header />
    <Router />
    <Footer />
  </Provider>
);

export default App;
