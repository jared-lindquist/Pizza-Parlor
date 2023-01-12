import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './Checkout.css';


function Checkout({getOrder, getPizza}) {

    const store = useSelector(store => store);
    const dispatch = useDispatch();
    const pizzas = store.currentOrder.map((object) => {
        return {id: object.id, quantity: object.quantity}
    })


    let cart = {
        customer_name: store.customer.customer_name,
        street_address: store.customer.street_address,
        city: store.customer.city,
        zip: store.customer.zip,
        total: store.currentOrder.reduce((accumulator, current) => accumulator + Number(current.price), 0),
        type: store.customer.type,
        pizzas: pizzas
    }


    const handleCheckout = () => {
        console.log('current cart we are sending to server: ', cart);

        axios.post('/api/order', cart)
        .then((response) => {
            console.log(response);
            alert('Your order has been submitted!');
            location.href='/#/'
            getPizza();
            getOrder();
            dispatch({
                type: 'CHECKOUT',
            })
        })
        .catch(error => {
            console.log(error);
        })
    }


    return(
        <div>
            <h2>Step 3: Checkout</h2><h2>Order for {store.customer.type}</h2>
            <div>
                <ul id="customer-info"> Customer info:
                    <li>
                        {store.customer.customer_name}
                    </li>
                    <li>
                        {store.customer.street_address}
                    </li>
                    <li>
                        {store.customer.city}
                    </li>
                    <li>
                        {store.customer.zip}
                    </li>
                </ul>
                <table id="order-table">
                    <tbody>
                    <tr>
                        <th>Name</th><th>Price</th>
                    </tr>
                    {store.currentOrder.map((item) => {
                        return(
                            <tr>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>                   
                </table>


                    <p>{store.currentOrder.reduce((accumulator, current) => accumulator + Number(current.price), 0)}</p>
                <button type='submit' onClick={handleCheckout}>Checkout</button> 

            </div>
        </div>

    )
}

export default Checkout;