import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleHomeWatch from '../SingleHomeWatch/SingleHomeWatch';
import './HomeWatches.css';

const HomeWatches = () => {

    const [homeWatches ,setHomeWatches] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/watchItems')
        .then(res => res.json())
        .then(data => setHomeWatches(data))
    },[])

    return (
        <Container id='HomeWatches'>
            <div className="sectionHeading">
                <h2>Our <span>Watches</span></h2>
            </div>
            <Row>
                {
                    homeWatches.slice(0,6).map(watch => <SingleHomeWatch key={watch._id} watch={watch}></SingleHomeWatch>)
                }
            </Row>
        </Container>
    );
};

export default HomeWatches;