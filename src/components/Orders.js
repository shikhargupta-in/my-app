import React, { useState, useEffect } from 'react';
import '../css/Table.css';

function Orders() {
    const [data, getData] = useState([])
    const URL = 'https://assessment.api.vweb.app/orders';

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }

    return (
        <>
            <tbody>
                <tr>
                    <th>Order Id</th>
                    <th>Product Id</th>
                    <th>Quantity</th>
                    <th>User ID</th>
                    <th>Order Date</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.order_id}</td>
                        <td>{item.product_id}</td>
                        <td>{item.quantity}</td>
                        <td>{item.user_id}</td>
                        <td>{item.order_date}</td>

                    </tr>
                ))}
            </tbody>

        </>
    );
}

export default Orders;