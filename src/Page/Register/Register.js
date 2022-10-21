import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateName, veryfyEmail } = useContext(AuthContext)
    const [error, setError] = useState("");
    const [accept, setAccept] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            updateName(name, photo).then(() => {}).catch(e => console.error(e))
            veryfyEmail().then(() => {}).catch(error => console.error(error))
            setError("")
            form.reset()
            toast('check your email for verification')
        })
        .catch(e => {
            console.error(e)
            setError(e.message)
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo Url</Form.Label>
                    <Form.Control name="photo" type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={(e) => setAccept(e.target.checked)} type="checkbox" label={
                        <>accept <Link to="/terms">terms & conditions</Link></>
                    } />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accept}>
                    Register
                </Button>
                <div>
                    <p className='text-danger'>{error}</p>
                </div>
            </Form>
        </div>
    );
};

export default Register;