import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './DetailsAndBooking.css';

const DetailsAndBooking = () => {
    const {user} = useAuth();
    //Get the ID 
    const {id} = useParams();
     //State
     const [singleWatch,setSingleWatch] = useState({})
     //Data load
     useEffect(()=>{
         fetch(`http://localhost:5000/watchItems/${id}`)
         .then(res => res.json())
         .then(data => setSingleWatch(data))
     },[])

     const { register, handleSubmit,formState: { errors } } = useForm();
     const onSubmit = data => {
         console.log(data);
     };
    return (
        <Container>
            <Row className="align-items-center gy-3 my-5" >
                <Col lg={6} md={6} sm={12} xs={12}>
                    <div className="Booking-watch">
                        <img src={singleWatch?.img} alt="" />
                        <h2>{singleWatch?.name}</h2>
                        <p>{singleWatch?.description}</p>
                        <h1>$ {singleWatch.price}</h1>
                    </div>
                </Col>
                <Col md={6} sm={12} xs={12}>
                <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user?.displayName} {...register("name")} />
                    <input defaultValue={user?.email} {...register("email", { required: true })} />
                    
                    <input value="pending" {...register("status",{ required: true })} />
                    <input value={singleWatch?.name} {...register("watchName" ,{ required: true })} />
                    <input defaultValue={singleWatch.price} {...register("singleWatchPrice" ,{ required: true })} />
                    <input defaultValue={singleWatch._id} {...register("watchId" ,{ required: true })} />
                    <input placeholder="Phone" defaultValue="" {...register("phone",{ required: true })} />
                    <input placeholder="Address" defaultValue="" {...register("address",{ required: true })} />
                    <input className="form-btn" type="submit" value="Order Now" />
                </form>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailsAndBooking;