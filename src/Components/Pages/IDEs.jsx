import React from 'react';
import '../../Styles/IDEs.css';
import Header from './Header';

const IDEs = () => {
    // Simulação de dados de IDEs - em um caso real, isso poderia ser obtido de um backend ou API.
    const idesData = [
        { id: 1, name: 'Visual Studio Code', description: 'Editor de código-fonte leve, mas poderoso, que funciona em seu desktop e está disponível para Windows, macOS e Linux.' },
        { id: 2, name: 'IntelliJ IDEA', description: 'Uma IDE Java poderosa que oferece um conjunto de ferramentas out-of-the-box para desenvolvimento de aplicações em Java.' },
        { id: 3, name: 'PyCharm', description: 'Uma IDE para Python que oferece recursos como autocompletar, inspeção de código e integração com ferramentas de desenvolvimento.' }
        // ... outras IDEs
    ];

    return (
        <div className="ides-container">
            <h1>Ambientes de Desenvolvimento Integrado (IDEs)</h1>
            <ul className="ides-list">
                {idesData.map(ide => (
                    <li key={ide.id} className="ide-item">
                        <h2>{ide.name}</h2>
                        <p>{ide.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IDEs;
