import React from 'react';
import '../../Styles/Relational.css';
import Header from './Header';

const Relational = () => {
    return (
        <div className="relational-container">
            <h1>Introdução aos Bancos de Dados Relacionais</h1>
            <p>
                Os bancos de dados relacionais são um tipo de banco de dados que organiza os dados em tabelas inter-relacionadas. Cada tabela consiste em linhas e colunas que representam entidades e seus atributos, respectivamente. A integridade e consistência dos dados são garantidas através de relações e restrições.
            </p>
            <p>
                SQL (Structured Query Language) é a linguagem padrão usada para interagir com bancos de dados relacionais. Exemplos populares de bancos de dados relacionais incluem MySQL, PostgreSQL, Oracle e Microsoft SQL Server.
            </p>
            {/* Você pode adicionar mais conteúdo ou funcionalidades conforme necessário */}
        </div>
    );
}

export default Relational;
