import React from 'react';
import '../Styles/Middlewares.css';

const Middlewares = () => {
    // Simulação de dados de middlewares
    const middlewaresData = [
        { id: 1, name: 'body-parser', description: 'Middleware para análise de corpo de solicitação.' },
        { id: 2, name: 'morgan', description: 'Logger de solicitação HTTP para Node.js.' },
        { id: 3, name: 'helmet', description: 'Ajuda a proteger aplicativos Express configurando vários cabeçalhos HTTP.' }
        // ... outros middlewares
    ];

    return (
        <div className="middlewares-container">
            <h1>Middlewares</h1>
            <ul className="middlewares-list">
                {middlewaresData.map(middleware => (
                    <li key={middleware.id} className="middleware-item">
                        <h2>{middleware.name}</h2>
                        <p>{middleware.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Middlewares;
