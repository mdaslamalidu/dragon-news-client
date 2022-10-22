import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("https://dragon-news-server-sand.vercel.app/news-category")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h5>All Categories: {categories.length}</h5>
            {categories.map(category => <p key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>)}
        </div>
    );
};

export default LeftSideNav;