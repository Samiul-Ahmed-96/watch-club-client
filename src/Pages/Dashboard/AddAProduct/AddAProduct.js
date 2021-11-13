import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddAProduct = () => {
    const { register, handleSubmit,reset } = useForm();
     //Handle Submit
     const onSubmit = data => {

        fetch('https://radiant-bayou-77332.herokuapp.com/watchItems',{

            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            alert('Added Successfully')
            reset();
            
        })
    };
    return (
        <div className="add-from">
        <h2 className="mb-3 fw-bold text-white">Add A Product</h2>
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Product Name" {...register("name",{ required: true })} />
                        <input placeholder="Image Link" {...register("img",{ required: true })} />
                        <textarea placeholder="Description" {...register("description",{ required: true })} />
                        <input placeholder="Price" {...register("price",{ required: true })} />
                        <input placeholder="rating" {...register("rating",{ required: true })} />
                        <input type="submit" value="Add Product"/>
                        </form>
                        </div>
    );
};

export default AddAProduct;