import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import Swal from 'sweetalert2';

const ManageDoctors = () => {
    const {
        data: doctors,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                });
                const data = await res.json();
                return data;
            } catch (error) {}
        },
    });

    const handleDelete = (id, name) => {
        Swal.fire({
            title: 'Are You Sure, You Want To Delete This Doctor ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: ' #3085d6',
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/doctors/${id}`;
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        authorization: `bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted Successfully',
                                `Doctor ${name} has been deleted.`,
                                'success'
                            );
                            refetch();
                        }
                    });
            }
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='m-14'>
            <h2 className='text-2xl text-black font-bold my-10'>
                Manage Doctors
            </h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, i) => (
                            <tr
                                key={doctor._id}
                                className='hover cursor-pointer'
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className='avatar'>
                                        <div className='w-20 rounded-full'>
                                            <img src={doctor.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                doctor._id,
                                                doctor.name
                                            )
                                        }
                                        className='btn btn-error text-white'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageDoctors;
