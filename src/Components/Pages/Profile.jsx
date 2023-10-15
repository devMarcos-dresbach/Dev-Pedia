import React from 'react';
import '../Styles/Profile.css';

const Profile = () => {
    // Simulação de dados do usuário - no mundo real, você provavelmente obteria isso de um back-end.
    const userData = {
        name: 'João da Silva',
        email: 'joao@email.com',
        joinedDate: '2021-01-15',
        bio: 'Desenvolvedor web com 5 anos de experiência. Amante de React e Node.js.'
    };

    return (
        <div className="profile-container">
            <h1>Perfil de {userData.name}</h1>
            <div className="profile-details">
                <div className="profile-image">
                    {/* Aqui você pode colocar uma imagem de perfil, se tiver uma */}
                    <img src="url_da_imagem" alt="Foto do perfil" />
                </div>
                <div className="profile-info">
                    <p><strong>Nome:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Membro desde:</strong> {new Date(userData.joinedDate).toLocaleDateString()}</p>
                    <p><strong>Bio:</strong> {userData.bio}</p>
                </div>
            </div>
            <button className="edit-profile-btn">Editar Perfil</button>
        </div>
    );
}

export default Profile;
