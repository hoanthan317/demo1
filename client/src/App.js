import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import { Provider } from 'react-redux';
import store from './store/store';
import NewsItemArticle from './components/layouts/NewsItemArticle';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <AppRoute exact path="/" layout={Layout} component={Home}/>
            <AppRoute path="/about" layout={Layout} component={About} />
            <AppRoute path="/news/:id" layout={Layout} component={NewsItemArticle}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
