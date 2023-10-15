import React from 'react';
import '../Styles/ManageUsers.css';

const ManageUsers = () => {
    return (
        <div className="manage-users-container">
            <h1>Manage Users</h1>
            <div className="user-actions">
                <button>Add New User</button>
                <button>Edit User</button>
                <button>Delete User</button>
            </div>
            <div className="users-list">
                {/* Aqui pode ser inserida uma lista/tabulação de usuários existentes */}
            </div>
        </div>
    );
}

export default ManageUsers;
