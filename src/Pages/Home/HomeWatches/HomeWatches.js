import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleHomeWatch from '../SingleHomeWatch/SingleHomeWatch';

const HomeWatches = () => {

    const [homeWatches ,setHomeWatches] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/watchItems')
        .then(res => res.json())
        .then(data => setHomeWatches(data))
    },[])

    return (
        <Container>
            <Row>
                {
                    homeWatches.map(watch => <SingleHomeWatch key={watch._id} watch={watch}></SingleHomeWatch>)
                }
            </Row>
        </Container>
    );
};

export default HomeWatches;