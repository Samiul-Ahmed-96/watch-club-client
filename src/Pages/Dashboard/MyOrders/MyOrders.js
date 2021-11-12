import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [userOrders, setUserOrders] = useState([])

    useEffect(()=>{
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setUserOrders(data))
    },[])
    return (
        <div className="user-orders">
        
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Watch Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    userOrders.map(order => <tr>
                        <td>{order.watchName}</td>
                        <td>{order.email}</td>
                        <td>{order.singleWatchPrice}</td>
                        <td>Delete</td>
                    </tr>)
                }
            </tbody>
        </Table>
        
        </div>
    );
};

export default MyOrders;