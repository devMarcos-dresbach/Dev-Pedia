import React from 'react';
import '../Styles/Databases.css';

const Databases = () => {
    // Simulação de dados de bancos de dados - em um caso real, isso poderia ser obtido de um backend ou API.
    const databasesData = [
        { id: 1, name: 'MySQL', type: 'Relacional', description: 'Um dos sistemas de gerenciamento de banco de dados mais populares do mundo.' },
        { id: 2, name: 'MongoDB', type: 'NoSQL', description: 'Banco de dados baseado em documentos que fornece alta performance e escalabilidade.' },
        { id: 3, name: 'PostgreSQL', type: 'Relacional', description: 'Um poderoso sistema de banco de dados relacional de código aberto.' }
        // ... outros bancos de dados
    ];

    return (
        <div className="databases-container">
            <h1>Soluções de Banco de Dados</h1>
            <ul className="databases-list">
                {databasesData.map(database => (
                    <li key={database.id} className="database-item">
                        <h2>{database.name} ({database.type})</h2>
                        <p>{database.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Databases;
