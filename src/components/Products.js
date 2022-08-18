import React, { useState, useEffect } from 'react';
import '../css/Table.css';
 
function Products() {
    const [data, getData] = useState([])
    const URL = 'https://assessment.api.vweb.app/products';
 
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
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Selling Price</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.product_id}</td>
                        <td>{item.name}</td>
                        <td>{item.stock}</td>
                        <td>{item.selling_price}</td>

                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default Products;