import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { UserContext } from './../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';


const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const savedCart = getDatabaseCart();
        const orderDetails = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date()}

        fetch('http://localhost:5000/addNewOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
           if(data){
                processOrder();
                alert('Order successfully has received !')
           }
        })
    };
  
    // console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6">

            <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} className='form-control' placeholder='Full name'/>
                {errors.name && <span className="d-block text-danger">Name is required</span>}

                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} className='form-control mt-3' placeholder='Email'/>
                {errors.email && <span className="d-block text-danger">Email is required</span>}

                <input name="address" ref={register({ required: true })} className='form-control mt-3' placeholder='Shipping address'/>
                {errors.address && <span className="d-block text-danger">Address is required</span>}

                <input name="phone" ref={register({ required: true })} className='form-control mt-3' placeholder='Phone number'/>
                {errors.phone && <span className="d-block text-danger">Phone number is required</span>}

                <input className="btn btn-success mt-3" type="submit" />
            </form>

        </div>
        <div className="col-3"></div>
    </div>
      
    );
};

export default Shipment;