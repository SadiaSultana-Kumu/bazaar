import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h1>products: {products.length}</h1>
            {
                products.map(items => <Items productProperty={items}></Items>)
            }
        </div>
    );
};

export default Products;