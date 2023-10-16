import React from 'react';
import '../../Styles/Docker.css';
import Header from './Header';

const Docker = () => {
    return (
        <div className="docker-container">
            <h1>Introdução ao Docker</h1>
            <p>
                Docker é uma plataforma de contêinerização que permite aos desenvolvedores criar, rodar, e distribuir aplicações facilmente em contêineres. Estes contêineres são ambientes leves e isolados que compartilham o mesmo sistema operacional, mas funcionam de forma independente.
            </p>
            <p>
                Com o Docker, é possível garantir que uma aplicação rodará da mesma forma em qualquer ambiente, já que todas as suas dependências estão dentro do contêiner. Isso facilita o desenvolvimento, o teste e a distribuição de aplicações em diversos ambientes.
            </p>
            {/* Você pode adicionar mais conteúdo ou funcionalidades conforme necessário */}
        </div>
    );
}

export default Docker;
