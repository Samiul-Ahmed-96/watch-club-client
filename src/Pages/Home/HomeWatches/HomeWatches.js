import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleHomeWatch from '../SingleHomeWatch/SingleHomeWatch';
import './HomeWatches.css';

const HomeWatches = () => {

    const [homeWatches ,setHomeWatches] = useState([]);

    useEffect(()=>{
        fetch('https://radiant-bayou-77332.herokuapp.com/watchItems')
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

            <Link to='/watches'><button className='Common-btn'>More Watches</button></Link>
        </Container>
    );
};

export default HomeWatches;