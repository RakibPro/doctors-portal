import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }
    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                toast.success('User Created Successfully');

                const userInfo = {
                    displayName: data.name,
                };
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });
    };

    // Save User Data On Server
    const saveUser = (name, email) => {
        const user = { name, email };
        const url = 'http://localhost:5000/users';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                setCreatedUserEmail(email);
            });
    };

    return (
        <section className='h-[600px] flex justify-center items-center'>
            <div
                className=' w-72 md:w-80 lg:w-96 p-8'
                style={{
                    boxShadow: '3px 4px 10px 2px rgba(0, 0, 0, 0.05)',
                    borderRadius: '18px',
                }}
            >
                <h2 className='text-4xl text-center text-black'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <span className='label-text text-black'>Name</span>
                        </label>
                        <input
                            type='text'
                            className='input input-bordered w-full'
                            {...register('name')}
                        />
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'>
                            <span className='label-text text-black'>Email</span>
                        </label>
                        <input
                            type='email'
                            className='input input-bordered w-full'
                            {...register('email', {
                                required: 'Please Enter Your Email Address !',
                            })}
                        />
                        {errors.email && (
                            <p role='alert' className=' text-error my-3'>
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className='form-control w-full max-w-xs mb-8'>
                        <label className='label'>
                            <span className='label-text text-black'>
                                Password
                            </span>
                        </label>
                        <input
                            type='password'
                            className='input input-bordered w-full'
                            {...register('password', {
                                required: 'Please Enter Password !',
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password must be 6 character or longer',
                                },
                                pattern: {
                                    value: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))/,
                                    message:
                                        'Password must have uppercase, lowercase and number',
                                },
                            })}
                        />
                        {errors.password && (
                            <p role='alert' className=' text-error my-3'>
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <input
                        type='submit'
                        value='Signup'
                        className='btn btn-accent w-full max-w-xs font-normal text-[#D4D9E3]'
                    />
                    <p className='font-normal text-black text-center text-sm my-4'>
                        Already have an account?
                        <Link to='/login' className='text-secondary'>
                            {' '}
                            Please Login
                        </Link>
                    </p>
                    <div className='divider text-black'>OR</div>
                    <button className='btn btn-accent btn-outline w-full max-w-xs font-normal'>
                        CONTINUE WITH GOOGLE
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
