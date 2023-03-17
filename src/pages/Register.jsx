import React from 'react';

const Register = () => {
    
    return <form className="flex flex-col mx-auto relative top-[70px] w-2/5">
        <h1 className='mb-6 text-3xl font-semibold text-center'>Create Account</h1>
        <input type={'text'} placeholder='Full name' />
        <input type={'email'} placeholder='Email address' />
        <input type={ 'password' } placeholder='Password' />
        <button className='px-5 hover:opacity-75 py-2 bg-green-500 font-bold rounded-full'>Create Account</button>
        <p className='text-center mt-2'>Already have an account? <span className='text-green-500 font-semibold'>Log in</span></p>
    </form>;
}
export default Register;