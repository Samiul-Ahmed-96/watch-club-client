import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [allProducts,setAllProducts] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/watchItems`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAllProducts(data))
    },[])

    //handle Delete
    const handleDelete = (id ) =>{
        const deleteConfirm = window.confirm("Want to delete?");
        if (deleteConfirm) {
            const url = `http://localhost:5000/watchItems/${id}`;
            fetch(url,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
    
                if(data.deletedCount){
                    alert('Deleted');
                    const remaining = allProducts.filter(product => product._id !== id)
                    setAllProducts(remaining);
                }
            })
        }
        
    }
    return (
        <div className="user-orders">
        
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    allProducts.map(product => <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.rating}</td>
                        <td><img className="w-25" src={product.img} alt="" /></td>
                        <td><button onClick={()=>handleDelete(product._id)}>Delete <i class="fas fa-trash-alt"></i></button></td>
                    </tr>)
                }
            </tbody>
        </Table>
        
        </div>
    );
};

export default ManageAllProducts;