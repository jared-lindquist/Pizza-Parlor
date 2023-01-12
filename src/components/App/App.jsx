import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
//turn these on as needed, delete what we don't end up using
import PizzaList from '../PizzaList/PizzaList';
//import PizzaItem from '../PizzaItem/PizzaItem';
import OrderList from '../OrderList/OrderList';
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    getPizza();
  }, []);

  const getPizza = () => {
    axios.get('/api/pizza')
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: 'SET_PIZZA',
        payload: response.data
      })
    })
    .catch((error) => {
      console.log('error in GET', error)
    })
  }

  const getOrder = () => {
    axios.get('/api/order')
    .then((response) => {
      console.log('in getOrder', response.data);
      dispatch({
        type: 'SET_ORDER',
        payload: response.data
      })
    })
    .catch((error) => {
      console.log('error in GET', error)
    })
  }

  return (
    <div className='App'>
      <Header />
        <Router>
            <Route exact path='/'>
              <PizzaList getPizza={getPizza} />
            </Route>
            <Route exact path='/checkout'>
              <Checkout  getOrder={getOrder} getPizza={getPizza} />
            </Route>
            <Route exact path='/customer'>
              <CustomerForm />
            </Route>
            <Route exact path='/admin'>
              <OrderList getOrder={getOrder}/>
            </Route>
        </Router>
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
