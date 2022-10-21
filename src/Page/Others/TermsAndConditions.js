import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>THis is our terms and conditions </h3>
            <h4>Go to: <Link to="/register">Registration</Link></h4>
        </div>
    );
};

export default TermsAndConditions;