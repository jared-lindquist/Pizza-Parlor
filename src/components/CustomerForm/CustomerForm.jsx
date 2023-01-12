import { useSelect } from '@mui/base';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CustomerForm.css';

function CustomerForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const customer = useSelector(store => store.customer)

    const [customerName, setCustomerName] = useState(customer.customer_name ? customer.customer_name : '');
    const [customerAddress, setCustomerAddress] = useState(customer.street_address ? customer.street_address : '');
    const [customerCity, setCustomerCity] = useState(customer.city ? customer.city : '');
    const [customerZip, setCustomerZip] = useState(customer.zip ? customer.zip : '');
    const [deliveryMethod, setDeliveryMethod] = useState(customer.type ? customer.type : '');


    const radioClick = (event) => {
        if (event.target.id === 'delivery') {
            setDeliveryMethod('Delivery');
        } else {
            setDeliveryMethod('Pickup')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let customerData =
        {
            "customer_name": customerName,
            "street_address": customerAddress,
            "city": customerCity,
            "zip": customerZip,
            "type": deliveryMethod,
        }

        dispatch({
            type: 'SET_CUSTOMER',
            payload: customerData
        });

        // Move to step 3: checkout after submitting
        history.push('/checkout');


    }
    return (
        <section id="customer-form">
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit}>
                <section id="text-input">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            value={customerName}
                            onChange={(event) => setCustomerName(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Street Address"
                            required value={customerAddress}
                            onChange={(event) => setCustomerAddress(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="City"
                            required value={customerCity}
                            onChange={(event) => setCustomerCity(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Zip"
                            required value={customerZip}
                            onChange={(event) => setCustomerZip(event.target.value)}
                        />
                    </div>
                </section>
                <section id="radio-input" name="radioForm">
                    <div>
                        <input
                            type="radio"
                            id="pickup"
                            value="Pickup"
                            name='method'
                            onClick={radioClick}

                        />
                        <label htmlFor="pickup">Pickup</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="delivery"
                            value="Delivery"
                            name='method'
                            onClick={radioClick}
                        />
                        <label htmlFor="delivery">Delivery</label>
                    </div>
                </section>
                <button className='next-btn' type="submit">NEXT</button>
            </form>

        </section>
    );
}

export default CustomerForm;