import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const RigntSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2 rounded' variant='outline-primary'>Login with Google</Button>
                <Button className='rounded' variant='outline-dark'>Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
            </div>
        </div>
    );
};

export default RigntSideNav;