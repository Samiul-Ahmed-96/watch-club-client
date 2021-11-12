import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [userOrders, setUserOrders] = useState([])

    useEffect(()=>{
        const url = `http://localhost:5000/orders`;
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
    const result = userOrders.filter(order => order.email === user.email);
    return (
        <div className="user-orders">
        <h2 className="mb-3 fw-bold">My Orders</h2>
        <Table className='text-center' striped bordered hover>
        <thead>
        <tr>
            <th className="w-25">Product Image</th>
            <th>Product Name</th>
            <th>Order By</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {
                result.map(order => <tr>
                    <td><img className='order-img' src={order.image} alt="" /></td>
                    <td>{order.watchName}</td>
                    <td>{order.name}</td>
                    <td>{order.singleWatchPrice}</td>
                    <td><button className="delete-btn" onClick={()=>handleDelete(order._id)}>Cancel <i class="fas fa-trash-alt"></i></button></td>
                </tr>)
            }
        </tbody>
    </Table>
        
        </div>
    );
};

export default MyOrders;