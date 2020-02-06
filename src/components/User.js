import React from 'react';

const generateUserOptions = (onUserSelected, users) => {
    return users.map(user => {
    return (
        <div key={user.name}>
            <p>
                <label>
                    <input name="users" type="checkbox" value={user.name} onChange={onUserSelected} />{user.name}
                </label>
            </p>
        </div>
    )
    });
}

const  Users = ({ onUserSelected, users }) => {
    return generateUserOptions(onUserSelected, users);
}

export default Users;