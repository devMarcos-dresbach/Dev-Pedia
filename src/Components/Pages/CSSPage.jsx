import React from 'react';
import Header from './Header';
import '../../Styles/CSSPage.css';

const CSSPage = () => {
    return (
        <div className="css-container">
            <p>CSS é uma linguagem de folhas de estilo usada para descrever a aparência e formatação de um documento escrito em HTML ou XML. O CSS descreve como os elementos devem ser renderizados na tela, no papel, na fala ou em outras mídias.</p>

            <h2>Conceitos Básicos:</h2>
            <ul>
                <li><strong>Seletores:</strong> Define em qual elemento HTML um conjunto de estilos será aplicado.</li>
                <li><strong>Propriedades:</strong> Ajusta como os elementos são exibidos (por exemplo, `color`, `font-size`).</li>
                <li><strong>Valores:</strong> Definido ao lado da propriedade, determina o comportamento da propriedade (por exemplo, `red`, `16px`).</li>
            </ul>

            <h2>Exemplo de código:</h2>
            <code>
                {`
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

h1 {
    color: #333;
}
                `}
            </code>

            <p>... E assim por diante. Você pode adicionar mais conteúdo conforme necessário.</p>
        </div>
    );
}

export default CSSPage;
