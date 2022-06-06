import React from 'react';
import sleeping from '../../../../images/sleeping.jpg';
const NotFound = () => {
    return (
        <div className='text-primary text-center'>
            <h2 className='text-primary'>Mechanic is sleeping</h2>
            <br />
            <img src={sleeping} width={1200} alt="" />
        </div>
    );
};

export default NotFound;