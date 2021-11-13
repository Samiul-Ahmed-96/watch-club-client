import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders,setAllOrders] = useState([]);

    useEffect(()=>{
        const url = `https://radiant-bayou-77332.herokuapp.com/orders`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAllOrders(data))
    },[])

    //handle Delete
    const handleDelete = (id ) =>{
        const deleteConfirm = window.confirm("Want to delete?");
        if (deleteConfirm) {
            const url = `https://radiant-bayou-77332.herokuapp.com/orders/${id}`;
            fetch(url,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
    
                if(data.deletedCount){
                    alert('Deleted');
                    const remaining = allOrders.filter(product => product._id !== id)
                    setAllOrders(remaining);
                }
            })
        }
        
    }
    return (
        <div className="user-orders">
        <h2 className="mb-3 fw-bold">Manage All Orders</h2>
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
                    allOrders.map(order => <tr>
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

export default ManageAllOrders;