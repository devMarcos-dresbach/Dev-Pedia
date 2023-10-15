import React from 'react';
import '../Styles/Forums.css';

const Forums = () => {
    return (
        <div className="forums-container">
            <h1>Fóruns Dev-Media</h1>
            <div className="forums-list">
                {/* Aqui pode ser inserida uma lista/tabulação dos tópicos existentes */}
                {/* Por exemplo: <div className="forum-topic">Tópico 1</div> */}
            </div>
            <button className="create-topic-btn">Criar novo tópico</button>
        </div>
    );
}

export default Forums;
