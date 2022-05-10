import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // const { id } = useParams()
    return (
        <div>
            <Link to={'/user'}>Users</Link>
            <Link to={'/user/add'}>Add User</Link>
            {/* <Link to={`/update/${id}`}>Update User</Link> */}
        </div>
    );
};

export default Header;