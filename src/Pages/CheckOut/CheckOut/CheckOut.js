import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState(
    //     {
    //         name: 'Ahmed Faru',
    //         email: 'ahmed@faru.com',
    //         address: 'kodol kaji road',
    //         phone: '01600000000'
    //     }
    // )
    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser)
    // }
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://quiet-earth-49744.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder} action="" method="post">
                <input className='w-100 mb-2' type="text" value={user.displayName} name='Name' placeholder='Name' disabled readOnly required />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='email' readOnly disabled required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' required autoComplete="off" />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required autoComplete='off' />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;