import React, { useContext } from 'react';
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

    // Make Admin Function
    const handleMakeAdmin = (id, name) => {
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
                    toast.success(`${name} Is Now Admin`);
                    refetch();
                } else {
                }
            });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='m-14'>
            <h2 className='text-2xl text-black font-bold mb-6'>All Users</h2>
            <div className='overflow-x-auto rounded-lg'>
                <table className='table w-full'>
                    <thead className='bg-[#E6E6E6] text-black uppercase'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {users?.map((user, i) => (
                            <tr key={user._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role !== 'admin' && (
                                        <button
                                            onClick={() =>
                                                handleMakeAdmin(
                                                    user._id,
                                                    user.name
                                                )
                                            }
                                            className='btn btn-secondary btn-sm text-white'
                                        >
                                            Make Admin
                                        </button>
                                    )}
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
