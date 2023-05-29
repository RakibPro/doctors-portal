import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
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
                                    message: 'Password must be strong',
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
