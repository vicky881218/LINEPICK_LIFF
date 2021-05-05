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
import InputInfo from './InputInfo';
import ChangeInfo from './ChangeInfo';
import Pickpoint from './Pickpoint';
import Record from './Record';
import RecordType from './RecordType';
import RecordContent from './RecordContent';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/screen'>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/SecondType/:typeId" component={Type}/>
            <Route path="/ProductsInfo/:name" component={ProductsInfo}/>
            <Route path="/CartProductInfo/:id" component={Cart}/>
            <Route path="/Checkout/:id" component={Checkout}/>
            <Route path="/BuyerInfo/:id" component={BuyerInfo}/>
            <Route path="/InputInfo/:id" component={InputInfo}/>
            <Route path="/ChangeInfo/:id" component={ChangeInfo}/>
            <Route path="/Pickpoint/:id" component={Pickpoint}/>
            <Route path="/BuyerAllOrderlist/:id" component={Record}/>
            <Route path="/RecordType/:orderListStatus/:id" component={RecordType}/>
            <Route path="/OrderlistContent/:id" component={RecordContent}/>
            </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
