import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    // get data using useform
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(
                'http://localhost:5000/appointmentSpecialty'
            );
            const data = await res.json();
            return data;
        },
    });

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url,
                    };
                    // send doctors information to database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem(
                                'accessToken'
                            )}`,
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            toast.success(
                                `Doctor ${data.name} added successfully`
                            );
                            navigate('/dashboard/managedoctors');
                        });
                }
            });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='h-[600px]'>
            <h2 className='text-2xl text-black font-bold m-12'>
                Add a New Doctor
            </h2>

            <div className='flex justify-start ms-12 g '>
                <div className='w-72 md:w-80 lg:w-96 p-12 rounded-lg bg-white'>
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Name
                                </span>
                            </label>
                            <input
                                type='text'
                                className='input input-bordered w-full'
                                {...register('name')}
                            />
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Email
                                </span>
                            </label>
                            <input
                                type='email'
                                className='input input-bordered w-full'
                                {...register('email', {
                                    required:
                                        'Please Enter Your Email Address !',
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
                                    Specialty
                                </span>
                            </label>
                            <select
                                {...register('specialty')}
                                className='select select-bordered w-full max-w-xs'
                            >
                                {specialties?.map((specialty) => (
                                    <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >
                                        {specialty.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='form-control w-full mb-7 max-w-xs'>
                            <input
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '20px',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    borderStyle: 'dashed',
                                    backgroundColor: '#fafafa',
                                    color: '#bdbdbd',
                                    outline: 'none',
                                }}
                                type='file'
                                className='input input-bordered w-full'
                                {...register('image', {
                                    required: 'Please Choose a Photo !',
                                })}
                            />
                            {errors.image && (
                                <p role='alert' className=' text-error my-3'>
                                    {errors.image?.message}
                                </p>
                            )}
                        </div>

                        <input
                            type='submit'
                            value='Add'
                            className='btn btn-accent cap normal-case w-full max-w-xs text-white'
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;
