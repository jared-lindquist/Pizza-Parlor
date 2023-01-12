import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './OrderList.css';

function OrderList({ getOrder }) {

    useEffect(() => {
        getOrder();
    }, []);

    const orderList = useSelector(store => store.orderList);
    console.log('store.orderlist: ', orderList)
    return (
        <div>
            <table id="order-list">
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>

                {orderList.map((order) => {
                    return (
                        <tr>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    )
                })}





            </table>
        </div>
    )
}

export default OrderList;