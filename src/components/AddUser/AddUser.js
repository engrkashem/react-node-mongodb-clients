import React from 'react';

const AddUser = () => {

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };

        //send data to server using fetch
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('User added successfully.');
                e.target.reset();
            });
    }

    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="name-field" placeholder='Name' required /> <br />
                <input type="email" name="email" id="name-field" placeholder='Email' required /> <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;