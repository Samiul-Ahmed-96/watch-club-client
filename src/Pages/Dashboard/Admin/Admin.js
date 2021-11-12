import React, { useState } from 'react';

const Admin = () => {
    const [email,setEmail] = useState('');


    const handleGetEmail = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const makeAdmin = (e) =>{
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    alert('Successfully Added Admin')
                }
            })

        e.preventDefault()
    }

    return (
       <div>
            <h2>Make An Admin</h2>
            <form onSubmit={makeAdmin}>
                <input onBlur={handleGetEmail} type="email" placeholder="email"/>
                <input type="submit" value="Make Admin" />
            </form>
       </div>
    );
};

export default Admin;