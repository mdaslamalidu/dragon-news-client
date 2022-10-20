import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummaryCart = ({news}) => {
    const { _id, author, total_view, title, thumbnail_url, image_url, details } = news;
    console.log(news)
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {details.length > 250 ? 
                    <p>{details.slice(0,250) + "...."} <Link to={`/news/${_id}`}>Read More</Link></p>
                   :
                    <p>{details}</p>
                   }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NewsSummaryCart;