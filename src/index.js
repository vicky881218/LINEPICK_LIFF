import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Type from './Type';
import ProductsInfo from './ProductsInfo';
import Cart from './Cart';
import Checkout from './Checkout';
import BuyerInfo from './BuyerInfo';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Type" component={Type}/>
            <Route path="/ProductsInfo/:name" component={ProductsInfo}/>
            <Route path="/CartInfo/:buyerId" component={Cart}/>
            <Route path="/Checkout/:id" component={Checkout}/>
            <Route path="/BuyerInfo/:id" component={BuyerInfo}/>
            </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
