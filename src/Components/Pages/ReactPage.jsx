import React from 'react';
import '../Styles/ReactPage.css';

const ReactPage = () => {
    return (
        <div className="react-container">
            <h1>React</h1>
            <p>React é uma biblioteca JavaScript para criar interfaces de usuário. É mantido pelo Facebook e por uma comunidade de desenvolvedores individuais e empresas. React pode ser usado como base no desenvolvimento de aplicativos de página única ou móveis.</p>

            <h2>Características Principais:</h2>
            <ul>
                <li><strong>Componentização:</strong> React é baseado em componentes, permitindo uma reutilização eficaz do código.</li>
                <li><strong>Virtual DOM:</strong> React usa um Virtual DOM para melhorar a eficiência, fazendo atualizações de maneira otimizada.</li>
                <li><strong>JSX:</strong> JSX é uma extensão de sintaxe para JavaScript que é usada com React para descrever o que a interface do usuário deve parecer.</li>
                <li><strong>Unidirecional:</strong> O fluxo de dados em um aplicativo React é unidirecional, o que torna o rastreamento de mudanças durante o desenvolvimento mais fácil.</li>
            </ul>

            <h2>Exemplo de código:</h2>
            <code>
                {`
function HelloComponent() {
    return <h1>Hello, React!</h1>;
}
                `}
            </code>
        </div>
    );
}

export default ReactPage;
