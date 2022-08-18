import React, { useState, useEffect } from 'react';
import '../css/Table.css';
 
function Users() {
    const [data, getData] = useState([])
    const URL = 'https://assessment.api.vweb.app/users';
 
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
                    <th>User Id</th>
                    
                    <th>Name</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.user_id}</td>
                        <td>{item.name}</td>

                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default Users;
