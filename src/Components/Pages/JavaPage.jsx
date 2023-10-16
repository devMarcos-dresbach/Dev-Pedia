import React from 'react';
import '../../Styles/JavaPage.css';
import Header from './Header';

const JavaPage = () => {
    return (
        <div className="java-container">
            <Header />
            <div className="java-content">
                <h1>Java</h1>
                <p>Java, uma linguagem de programação orientada a objetos criada na década de 1990 pela Sun Microsystems, tornou-se um padrão na indústria de desenvolvimento de software devido à sua portabilidade e robustez.</p>

                <section className="features">
                    <h2>Características Principais:</h2>
                    <ul>
                        <li><strong>Orientação a Objetos:</strong> Abstração, encapsulamento, herança e polimorfismo são os pilares da Java.</li>
                        <li><strong>Portabilidade:</strong> O famoso lema "Escreva uma vez, execute em qualquer lugar" (WORA).</li>
                        <li><strong>Performance:</strong> Com a compilação Just-In-Time (JIT), Java oferece desempenho comparável ao código nativo.</li>
                        <li><strong>Robusto:</strong> Gerenciamento de memória automático, verificação de exceção e um rico conjunto de bibliotecas.</li>
                    </ul>
                </section>

                <section className="code-example">
                    <h2>Exemplo de código:</h2>
                    <pre>
                        <code>
                            {`
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");
    }
}
                            `}
                        </code>
                    </pre>
                </section>

                <section className="advanced-topics">
                    <h2>Temas Avançados em Java:</h2>
                    <ul>
                        <li><strong>Concorrência:</strong> O Java oferece suporte integrado para programação multithreaded.</li>
                        <li><strong>Lambdas e Streams:</strong> Introduzidos no Java 8, trouxeram programação funcional ao Java.</li>
                        <li><strong>JVM e JRE:</strong> A Máquina Virtual Java e o Ambiente de Tempo de Execução.</li>
                        <li><strong>Frameworks:</strong> Spring, Hibernate, JavaFX e outros que impulsionam o desenvolvimento em Java.</li>
                    </ul>
                </section>

                <footer className="java-footer">
                    <p>Java, ao longo dos anos, evoluiu para atender às demandas em constante mudança da indústria e continua sendo uma das linguagens de programação mais populares e influentes no mundo.</p>
                </footer>
            </div>
        </div>
    );
}

export default JavaPage;
