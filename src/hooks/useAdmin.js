import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/users/admin/${email}`;
        if (email) {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                });
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
