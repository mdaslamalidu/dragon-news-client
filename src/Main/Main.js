import React from 'react';
import { Outlet } from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";
import LeftSideNav from '../Page/Shared/LeftSideNav/LeftSideNav';
import RigntSideNav from '../Page/Shared/RigntSideNav/RigntSideNav';
import Header from '../Page/Shared/Header/Header';
import Footer from '../Page/Shared/Footer/Footer';


const Main = () => {
    return(
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col xl={2}>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col xl={7}>
                        <Outlet></Outlet>
                    </Col>
                    <Col xl={3}>
                        <RigntSideNav></RigntSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
};

export default Main;