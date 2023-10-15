import React from 'react';
import '../Styles/News.css';

const News = () => {
    // Simulação de dados de notícias - no mundo real, você provavelmente obteria isso de uma API.
    const newsData = [
        { id: 1, title: 'Lançamento do React 20!', content: 'Hoje, a equipe do React anunciou...' },
        { id: 2, title: 'Atualizações no Dev-Media', content: 'Estamos felizes em anunciar novas funcionalidades...' },
        { id: 3, title: 'Evento de Desenvolvimento Web', content: 'Participe do nosso próximo evento sobre...' }
        // ... outras notícias
    ];

    return (
        <div className="news-container">
            <h1>Notícias</h1>
            <ul className="news-list">
                {newsData.map(news => (
                    <li key={news.id} className="news-item">
                        <h2>{news.title}</h2>
                        <p>{news.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;
