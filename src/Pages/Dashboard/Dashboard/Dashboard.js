import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';

const Dashboard = () => {
    const {handleSignOut} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <Container>
            <Row>
                <Col md={3} xs={12} sm={12}>
                    <div className="dashboard-link">
                        <ul>
                            <li><Link to={`${url}`}>Dashboard</Link></li>
                            <li><Link to={`${url}/pay`}>Pay</Link></li>
                            <li><Link to={`${url}/MyOrders`}>My Orders</Link></li>
                            <li><Link to={`${url}/review`}>Review</Link></li>
                            <button onClick={handleSignOut}>Logout</button>
                        </ul>
                    </div>
                </Col>
                <Col md={3} xs={12} sm={12}>
                <Switch>
                <Route exact path={path}>
                    <MyOrders/>
                </Route>
                <Route path={`${path}/pay`}>
                    <Pay/>
                </Route>
                </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;