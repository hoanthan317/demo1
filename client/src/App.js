import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import { Provider } from 'react-redux';
import store from './store/store';
import NewsItemArticle from './components/layouts/NewsItemArticle';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/news/:id" component={NewsItemArticle}/>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
