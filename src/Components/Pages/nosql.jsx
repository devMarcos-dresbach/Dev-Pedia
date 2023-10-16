import React from 'react';
import '../../Styles/NoSQL.css';
import Header from './Header';

const NoSQL = () => {
    return (
        <div className="nosql-container">
            <h1>Introdução ao NoSQL</h1>
            <p>
                Os bancos de dados NoSQL representam uma abordagem diferente das tradicionais bases de dados relacionais. Em vez de tabelas com linhas e colunas, eles podem armazenar dados em formatos flexíveis, como documentos JSON. Exemplos populares incluem MongoDB, Cassandra e Redis.
            </p>
            <p>
                Os bancos de dados NoSQL são especialmente úteis para projetos que exigem escalabilidade e variedade de dados, especialmente quando os dados não têm um esquema fixo.
            </p>
            {/* Você pode adicionar mais conteúdo ou funcionalidades conforme necessário */}
        </div>
    );
}

export default NoSQL;
