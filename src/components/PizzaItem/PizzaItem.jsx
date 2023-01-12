import { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './PizzaItem.css';

export default function PizzaItem ({getPizza, pizza}) {

    const dispatch = useDispatch();
    const currentOrder = useSelector(cart=> cart.currentOrder);
    const inCart = currentOrder.some(item => item.id == pizza.id)


    const handleClick = () => {
        if (!inCart) {
            dispatch({
                type: 'ADD_PIZZA',
                payload: {
                    id: pizza.id,
                    name: pizza.name,
                    price: pizza.price,
                    quantity: 1
                }
            })
        } else {
            dispatch({
                type: 'REMOVE_PIZZA',
                payload: pizza.id
            })
        }
        getPizza();
    }

    return (
        <div className="pizzaItem">
            <img src={pizza.image_path}/>
            <div className="pizzaDetails">
                <h3>{pizza.name}</h3>
                <section className="pizzaDescription">{pizza.description}</section>
            </div>
            <section className="pizzaFooter">
                <section className="pizzaPrice">${pizza.price}</section>
                <div className="addPizzaButton" onClick={handleClick}>{inCart ? "Remove" : "Add"}</div>
            </section>
        </div>
    )
}