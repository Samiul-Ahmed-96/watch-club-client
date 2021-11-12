import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AddAProduct from '../AddAProduct/AddAProduct';
import Admin from '../Admin/Admin';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
    const {handleSignOut} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <Container>
            <Row>
                <Col md={3} xs={12} sm={12}>
                    <div className="dashboard-link">
                        <ul>
                            <li><Link to={`${url}/MyOrders`}>My Orders</Link></li>
                            <li><Link to={`${url}/pay`}>Pay</Link></li>
                            <li><Link to={`${url}/review`}>Review</Link></li>
                            <button onClick={handleSignOut}>Logout</button>
                        </ul>
                        <ul>
                            <li><Link to={`${url}/makeAnAdmin`}>Make An Admin</Link></li>
                            <li><Link to={`${url}/manageAllProducts`}>Manage All Products</Link></li>
                            <li><Link to={`${url}/addAProduct`}>Add A Product</Link></li>
                            <button onClick={handleSignOut}>Logout</button>
                        </ul>
                    </div>
                </Col>
                <Col md={9} xs={12} sm={12}>
                <Switch>
                    <Route exact path={path}>
                        <MyOrders/>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay/>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders/>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review/>
                    </Route>
                    <Route path={`${path}/makeAnAdmin`}>
                        <Admin/>
                    </Route>
                    <Route path={`${path}/manageAllProducts`}>
                        <ManageAllProducts/>
                    </Route>
                    <Route path={`${path}/addAProduct`}>
                        <AddAProduct/>
                    </Route>
                </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;