import React from 'react';

const Items = (props) => {
    const {category, description, id, title, image, rating} = props.productProperty;
    return (
        <div>
            <h6>{title}</h6>
            <img src={image} alt=""/>
        </div>
    );
};

export default Items;