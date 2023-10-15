import React from 'react';
import '../Styles/JavaPage.css';

const JavaPage = () => {
    return (
        <div className="java-container">
            <h1>Java</h1>
            <p>Java é uma linguagem de programação orientada a objetos popular e plataforma de computação. É conhecida por sua portabilidade, robustez e desempenho, e é usada em uma variedade de aplicações, desde dispositivos móveis a sistemas empresariais de grande escala e supercomputadores.</p>

            <h2>Características Principais:</h2>
            <ul>
                <li><strong>Orientação a Objetos:</strong> Java é uma linguagem fundamentalmente orientada a objetos.</li>
                <li><strong>Portabilidade:</strong> O lema "Escreva uma vez, execute em qualquer lugar" (WORA) é bem conhecido em relação ao Java.</li>
                <li><strong>Performance:</strong> Com a Just-In-Time (JIT) compilação, programas Java têm desempenho próximo ao código nativo.</li>
                <li><strong>Robusto:</strong> Java oferece gerenciamento de memória automático e verificação de exceção.</li>
            </ul>

            <h2>Exemplo de código:</h2>
            <code>
                {`
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");
    }
}
                `}
            </code>

            <p>... E assim por diante. Você pode adicionar mais conteúdo conforme necessário, discutindo frameworks populares, padrões de design em Java, sua evolução ao longo dos anos e muito mais.</p>
        </div>
    );
}

export default JavaPage;
