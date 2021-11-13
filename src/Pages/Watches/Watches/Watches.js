import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleWatches from '../SingleWatches/SingleWatches';

const Watches = () => {
    const [watches ,setWatches] = useState([]);

    useEffect(()=>{
        fetch('https://radiant-bayou-77332.herokuapp.com/watchItems')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])
    return (
        <Container id='HomeWatches'>
            <div className="sectionHeading">
                <h2>Our <span>Watches</span></h2>
            </div>
            <Row>
                {
                    watches.map(watch => <SingleWatches key={watch._id} watch={watch}></SingleWatches>)
                }
            </Row>
            <Link to='/'><button className='Common-btn'>Back to Home</button></Link>
        </Container>
    );
};

export default Watches;