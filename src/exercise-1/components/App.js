import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../components/Home';
import MyProfile from '../components/MyProfile';
import AboutUs from '../components/AboutUs';
import Products from './Products';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/my-profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route path="/my-profile">
                <MyProfile />
              </Route>
              <Route path="/about-us" >
                <AboutUs />
              </Route>
              <Route path="/products/:id" component = {Product}>
              </Route>
              <Route path="/products" >
                <Products/>
              </Route>
              <Redirect from='/goods' to='/products' />
              <Redirect from='/*' to='/' />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
