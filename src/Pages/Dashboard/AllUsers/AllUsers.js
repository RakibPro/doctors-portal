import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const url = 'http://localhost:5000/users';
    const {
        data: users = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading />;
    }

    const handleMakeAdmin = (id) => {
        const url = `http://localhost:5000/users/admin/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('This User Is Now Admin');
                    refetch();
                } else {
                }
            });
    };

    return (
        <section className='m-14'>
            <h2 className='text-3xl text-black mb-4'>My Appointment</h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, i) => (
                            <tr key={user._id} className='hover cursor-pointer'>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role !== 'admin' && (
                                        <button
                                            onClick={() =>
                                                handleMakeAdmin(user._id)
                                            }
                                            className='btn btn-secondary'
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button className='btn btn-error'>
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

export default AllUsers;
