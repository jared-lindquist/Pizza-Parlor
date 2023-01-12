import { useSelector } from "react-redux"
import PizzaItem from "../PizzaItem/PizzaItem"
import './PizzaList.css';

export default function PizzaList ({getPizza}) {
    
    const pizzaMenu = useSelector(store => store.pizzaList)
    console.log('in pizzaList, pizzaMenu:', pizzaMenu);
    return (
        <>
            <h2>Step 1: Select Your Pizza</h2>
            
            <div id="pizzaList">
                {pizzaMenu.map((pizza) => {
                    return (
                    <PizzaItem 
                    key={pizza.id}
                    getPizza={getPizza}
                    pizza={pizza}
                    />
                    )
                })}
                
            </div>
            <button className="next-btn" onClick={() => location.href='/#/customer'}>Next</button>
        </>
    )
};