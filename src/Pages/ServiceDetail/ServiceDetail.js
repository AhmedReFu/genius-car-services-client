import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/home#services')
    }
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='text-center'>
            <button onClick={navigateHome}>Back</button>
            <h2>You are about to book: {service.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;