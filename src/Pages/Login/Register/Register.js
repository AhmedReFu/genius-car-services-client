import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {

    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log('user', user)
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);

        // }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log(user);
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center mb-5'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' />

                <input type="email" name='email' id='' placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2' : 'ps-2 text-danger'} htmlFor="terms"> Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms"> Accept Genius Car Terms and Conditions</label>

                <input
                    disabled={!agree}
                    type="submit"
                    className='btn btn-primary w-50 mx-auto mt-2'
                    value="Register" />

            </form>
            <p className='mt-4'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;