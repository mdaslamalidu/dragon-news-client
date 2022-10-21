import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import {Link} from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handlelogOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to="/">Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {user?.uid ? 
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handlelogOut} className='btn text-white btn-outline-success mx-2 py-0'>Log out</Button>
                                </>
                                :
                                <>
                                    <Link to="/login">log in</Link>
                                    <Link to="/register">Register</Link>
                                </>
                        }
                            
                            </Nav.Link>
                        <Link to="/profile">
                            {
                                user?.photoURL ? 
                                    <Image
                                        roundedCircle
                                        src={user.photoURL}
                                        style={{height: "40px"}}
                                    ></Image>
                                    :
                                    <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                     <div className='d-block d-lg-none'>
                         <LeftSideNav></LeftSideNav>
                     </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;