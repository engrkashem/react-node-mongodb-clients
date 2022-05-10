import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])

    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email };

        //send data to server using fetch
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Successfully updated user', data);
                alert('User updated successfully');
                e.target.reset();
            })
    }
    return (
        <div>
            <h2>User Information Update Here: with name- {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="name-field" placeholder='Name' required /> <br />
                <input type="email" name="email" id="name-field" placeholder='Email' required /> <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;