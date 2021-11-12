import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import './Review.css';

const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            
            <form className="give-review" onSubmit={handleSubmit(onSubmit)}>
                <h2>Give A Review</h2>
                <input defaultValue={user?.displayName} {...register("name") } />
                <textarea placeholder="Your Thoughts" required {...register("massage") } />
                <select {...register("rating")}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;