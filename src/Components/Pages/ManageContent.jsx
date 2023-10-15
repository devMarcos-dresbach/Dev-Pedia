import React from 'react';
import '../Styles/ManageContent.css';

const ManageContent = () => {
    return (
        <div className="manage-content-container">
            <h1>Manage Content</h1>
            <div className="content-actions">
                <button>Add New Content</button>
                <button>Edit Content</button>
                <button>Delete Content</button>
            </div>
            <div className="content-list">
                {/* Aqui pode ser inserida uma lista/tabulação de conteúdos existentes */}
            </div>
        </div>
    );
}

export default ManageContent;
