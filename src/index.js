import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';


// ------------------REDUCERS -------------------
const pizzaList = (state = [], action) => {
    if(action.type === 'SET_PIZZA'){
        // console.log('In pizzaList', action.payload);
        return action.payload;
    } else if (action.type === 'CHECKOUT') {
        return [];
    }
    return state;
}

const currentOrder = (state = [], action) => {
    // console.log('In currentOrder');
    if(action.type === 'ADD_PIZZA'){
        console.log('currentOrder state:', state)
        return [...state, action.payload];
    }
    if(action.type === 'REMOVE_PIZZA'){
        state = state.filter((item) => {return item.id != action.payload})
        return state;
    } else if (action.type === 'CHECKOUT') {
        return [];
    }
    return state;
}

const customer = (state = [], action) => {
    // console.log('In customer');
    if (action.type === 'SET_CUSTOMER'){
        return action.payload;
    } else if(action.type === 'CHECKOUT') {
        return [];
    }
    return state;
}

const orderList = (state = [], action) => {
    console.log('In orderList');
    if(action.type === 'SET_ORDER'){
        console.log('in SET_ORDER')
        return action.payload;
    } else if(action.type ==='CHECKOUT') {
        return [];
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        pizzaList,
        currentOrder,
        customer,
        orderList
    }),
    applyMiddleware(logger)
);

// ------------- REDUX FOR ALL --------------------
ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>, document.getElementById('root'));
