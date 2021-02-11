import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom'

const NavBar = () => {
    return <div id="navBar" >
        <Container>
            <Row className="p-3 " id="navbar">
                <Col id="logo">
                    <img src={window.location.origin + '/logo.png'} height="60px" className="" />
                </Col>
                <Col className="navbar navbar-item">
                    <Link to="/">
                        <div className="nav-link active text-black-50 h4">Home</div>
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>;
}

export default NavBar;