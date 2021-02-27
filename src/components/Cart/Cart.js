import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // total or use reduce
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    //shipping cost
    let shipping = 0;
    if(total>0 && total<15){
        shipping = 12.99;
    }
    else if(total>=15 && total<35){
        shipping = 4.99;
    }
    else{
        shipping = 0;
    }

    // tax
    const tax = total/10 ;


   

    return (
        <div>
            <h1>Order Summery</h1>
            <h5>Items ordered : {cart.length}</h5>
            <p>Product price : {total}</p>
            <p>Shipping cost : {shipping}</p>
            <p>Tax + vat : {tax}</p>
            <p>Total price : {total+tax+shipping}</p>
        </div>
    );
};

export default Cart;