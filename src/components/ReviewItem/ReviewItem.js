import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key} = props.product;
    const reviewStyle = {
        marginLeft:'200px',
        borderBottom:'1px solid gray',
        paddingBottom:'20px',
        marginBottom:'10px'
    }
    return (
        <div style={reviewStyle}>
            <h3 className='product-name'>{name}</h3>
            <h4>Quantity : {quantity}</h4>
            <br/>
            <button onClick={() => props.removeItemHandler(key)} className='main-btn'>remove item</button>
        </div>
    );
};

export default ReviewItem;