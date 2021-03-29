import React from 'react';

const Inventory = () => {
    document.title = 'Inventory';

    const productHandler = () => {
        const product = {};
        fetch('http://localhost:5000/addProducts',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(product)
        })
    }

    return (
        <div>
            
            <form action="" className='text-center'>
                <h1>Add Products</h1>
                <p> <span>Name : </span> <input type="text" name="" id=""/> </p>
                <p> <span>Price : </span> <input type="text" name="" id=""/> </p>
                <p> <span>Quantity : </span> <input type="text" name="" id=""/> </p>
                <p> <span>Image : </span> <input type="file" name="" id=""/> </p>
                <button onClick={productHandler} className='btn btn-success' >Add Product</button>
            </form>
        </div>
    );
};

export default Inventory;