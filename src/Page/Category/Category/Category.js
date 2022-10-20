import React  from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const category = useLoaderData();
    console.log(category)
    return (
        <div>
            <h2>All Category {category.length}</h2>
        </div>
    );
};

export default Category;