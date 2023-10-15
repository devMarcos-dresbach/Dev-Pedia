import React from 'react';
import '../Styles/Notifications.css';

const Notifications = () => {
    // Esta é uma simulação de dados de notificações, no futuro você pode buscar isso de uma API.
    const notificationsData = [
        { id: 1, content: 'Seu post sobre React.js foi aprovado!' },
        { id: 2, content: 'Novo comentário em seu post sobre Webpack' },
        { id: 3, content: 'Sua imagem foi adicionada à galeria' }
        // ... outras notificações
    ];

    return (
        <div className="notifications-container">
            <h1>Notificações</h1>
            <ul className="notifications-list">
                {notificationsData.map(notification => (
                    <li key={notification.id}>
                        {notification.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
