import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure You want to delete the user??');
        if (proceed) {
            console.log('deleting user with id: ', id)
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted user');
                        const restUser = users.filter(user => user._id !== id);
                        setUsers(restUser);
                    }
                })
        }
    }
    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <ul>
                {
                    users.map(u => <li key={u._id}>Name: {u.name}, Email: {u.email}<br />
                        <button onClick={() => handleUserDelete(u._id)}>Delete</button>
                        <button onClick={() => navigate(`/update/${u._id}`)}>Update User</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;