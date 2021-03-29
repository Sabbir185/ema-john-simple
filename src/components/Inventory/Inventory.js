import React from 'react';
import fakeData from './../../fakeData';

const Inventory = () => {
    document.title = 'Inventory';

    const productHandler = () => {
        fetch('http://localhost:5000/addProducts',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div>
            <h1>Add Products</h1>
            <button onClick={productHandler} className='btn btn-success' >Add Product</button>
        </div>
    );
};

export default Inventory;