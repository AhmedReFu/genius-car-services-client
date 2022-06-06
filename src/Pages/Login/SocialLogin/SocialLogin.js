import React from 'react';
import google from '../../../images/social/google-logo.png'
import facebook from '../../../images/social/facebook-logo.png'
import github from '../../../images/social/GitHub-logo.png'
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (loading || loading1 || loading2) {
        return <Loading></Loading>
    }
    if (error || error1 || error2) {
        errorElement = (
            <div>
                <p className='text-danger'>Error: {error?.message}{error1?.message}{error2?.message}</p>
            </div>
        );
    }

    if (user || user1 || user2) {
        navigate(from, { replace: true });
    }
    const handleGoogleSignIn = () => {

        signInWithGoogle();
    }
    const handleGithubSignIn = () => {

        signInWithGithub();
    }
    const handleFacebookSignIn = () => {

        signInWithFacebook();
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={handleGoogleSignIn} className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={handleFacebookSignIn} className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button onClick={handleGithubSignIn} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;