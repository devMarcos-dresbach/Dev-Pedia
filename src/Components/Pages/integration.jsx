import React from 'react';
import '../../Styles/Integration.css';
import Header from './Header';

const Integration = () => {
    return (
        <div className="integration-container">
            <h1>Introdução à Integração Contínua</h1>
            <p>
                Integração contínua (IC) é uma prática de desenvolvimento de software que envolve a integração frequente de código em um repositório compartilhado. Cada integração é então verificada por uma compilação automatizada, permitindo que equipes detectem e corrijam problemas rapidamente.
            </p>
            <p>
                A integração contínua visa melhorar a qualidade do software e acelerar o processo de entrega, permitindo que os desenvolvedores integrem alterações de código em um projeto várias vezes ao dia. Ferramentas populares para IC incluem Jenkins, Travis CI e CircleCI.
            </p>
            {/* Você pode adicionar mais conteúdo ou funcionalidades conforme necessário */}
        </div>
    );
}

export default Integration;
