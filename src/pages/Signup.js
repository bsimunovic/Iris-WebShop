import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await createUser(email, password);
        navigate('/')
    } catch (e) {
        setError(e.message);
        console.log(e.message);
    }
};

  return (
      <div className='w-full min-h-screen'>
        <div className='fixed w-full px-4 py-36 z-50'>
          <div className='max-w-[450px] h-[500px] mx-auto bg-black/30 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <div>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
              </div>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rouded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-white/90'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                <span className='text-white/90'>Already have an account?</span>{' '}
                <Link to='/signin'>Sign In</Link>
                </p>
              </form>
              </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;