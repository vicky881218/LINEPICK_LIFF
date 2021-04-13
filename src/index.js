import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SingleProduct from './SingleProduct';
import Checkout from './Checkout';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/SingleProduct" component={SingleProduct}/>
            <Route path="/Checkout/:id" component={Checkout}/>
            </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
