import React from 'react';
import Header from './Header';
import '../../Styles/Contributions.css';

const Contributions = () => {
    // Esta é uma simulação de dados de contribuições, no futuro você pode buscar isso de uma API.
    const contributionsData = [
        { id: 1, type: 'Post', content: 'Postagem sobre React.js' },
        { id: 2, type: 'Comentário', content: 'Comentário em "Como configurar Webpack"' },
        { id: 3, type: 'Upload', content: 'Adicionou uma imagem na galeria' }
        // ... outras contribuições
    ];

    return (
        <div className="contributions-container">
            <h1>Minhas Contribuições</h1>
            <ul className="contributions-list">
                {contributionsData.map(contribution => (
                    <li key={contribution.id}>
                        <strong>{contribution.type}:</strong> {contribution.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Contributions;
