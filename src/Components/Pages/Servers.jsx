import React from 'react';
import '../Styles/Servers.css';

const Servers = () => {
    const serverData = [
        { id: 1, name: 'Node.js', description: 'Ambiente de execução JavaScript baseado no motor V8 do Chrome.' },
        { id: 2, name: 'Apache', description: 'Servidor HTTP de código aberto mais utilizado.' },
        { id: 3, name: 'Nginx', description: 'Servidor web, proxy reverso e proxy de email.' },
        // ... outros servidores
    ];

    return (
        <div className="servers-container">
            <h1>Servidores</h1>
            <ul className="server-list">
                {serverData.map(server => (
                    <li key={server.id} className="server-item">
                        <h2>{server.name}</h2>
                        <p>{server.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Servers;
