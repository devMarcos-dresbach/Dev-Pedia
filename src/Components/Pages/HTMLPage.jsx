import React from 'react';
import '../../Styles/HTMLPage.css';
import Header from './Header';

const HTMLPage = () => {
    return (
        <div className="html-container">
            <p>HTML é a linguagem padrão para criar páginas e aplicativos da Web. Junto com CSS e JavaScript, o HTML é uma tecnologia fundamental usada na maioria dos sites.</p>

            <h2>Conceitos Básicos:</h2>
            <ul>
                <li><strong>Elementos:</strong> Representa partes ou conteúdo de uma página (por exemplo, `&lt;header&gt;`, `&lt;p&gt;`).</li>
                <li><strong>Atributos:</strong> Propriedades adicionais que podem ser aplicadas a um elemento para fornecer mais informações ou funcionalidades (por exemplo, `class`, `id`).</li>
                <li><strong>Tags:</strong> Marcadores que definem e encapsulam o conteúdo em um documento HTML (por exemplo, `&lt;h1&gt;`, `&lt;/h1&gt;`).</li>
            </ul>

            <h2>Exemplo de código:</h2>
            <code>
                {`
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Meu Título&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Olá, mundo!&lt;/h1&gt;
    &lt;p&gt;Esta é uma página HTML simples.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
                `}
            </code>

            <p>... E assim por diante. Você pode adicionar mais conteúdo conforme necessário.</p>
        </div>
    );
}

export default HTMLPage;
