import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const RigntSideNav = () => {
    const { createWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        createWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }


    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2 rounded' variant='outline-primary'><FaGoogle/> Login with Google</Button>
                <Button className='rounded' variant='outline-dark'><FaGithub/> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3 background-white border-1 rounded'><FaFacebook/> facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3 background-white border-1 rounded'><FaWhatsapp/> whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3 background-white border-1 rounded'><FaTwitter/> twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3 background-white border-1 rounded'><FaTwitch/> twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3 background-white border-1 rounded'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel/>
            </div>
        </div>
    );
};

export default RigntSideNav;