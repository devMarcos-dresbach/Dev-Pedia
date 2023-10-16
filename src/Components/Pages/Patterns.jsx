import React from 'react';
import '../../Styles/Patterns.css';
import Header from './Header';

const Patterns = () => {
    // Simulação de dados de padrões - em um caso real, você poderia obter isso de um backend ou API.
    const patternsData = [
        { id: 1, name: 'Singleton', description: 'Garante que uma classe tenha apenas uma instância e fornece um ponto global para acessar essa instância.' },
        { id: 2, name: 'Factory', description: 'Fornece uma interface para criar instâncias de uma classe, com suas subclasses decidindo qual classe instanciar.' },
        { id: 3, name: 'Observer', description: 'Define uma dependência entre objetos para que, quando um objeto muda de estado, seus dependentes sejam notificados e atualizados automaticamente.' }
        // ... outros padrões
    ];

    return (
        <div className="patterns-container">
            <h1>Padrões de Design</h1>
            <ul className="patterns-list">
                {patternsData.map(pattern => (
                    <li key={pattern.id} className="pattern-item">
                        <h2>{pattern.name}</h2>
                        <p>{pattern.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Patterns;
