import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [userOrders, setUserOrders] = useState([])

    useEffect(()=>{
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setUserOrders(data))
    },[])

    //handle Delete
    const handleDelete = (id ) =>{
        const deleteConfirm = window.confirm("Want to delete?");
        if (deleteConfirm) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
    
                if(data.deletedCount){
                    alert('Deleted');
                    const remaining = userOrders.filter(order => order._id !== id)
                    setUserOrders(remaining);
                }
            })
        }
        
    }

    return (
        <div className="user-orders">
        
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Watch Name</th>
                <th>Your Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    userOrders.map(order => <tr>
                        <td>{order.watchName}</td>
                        <td>{order.name}</td>
                        <td>{order.singleWatchPrice}</td>
                        <td><button onClick={()=>handleDelete(order._id)}>Cancel</button></td>
                    </tr>)
                }
            </tbody>
        </Table>
        
        </div>
    );
};

export default MyOrders;