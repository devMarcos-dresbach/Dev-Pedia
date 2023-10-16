import React from 'react';
import Header from './Header';
import '../../Styles/Home.css';

const HomePage = () => {
    return (
        <div className="devpedia-container">
            <Header />
            <main className="devpedia-main">
                <section className="introduction-section">
                    <h1>Dev-Pédia: A Enciclopédia dos Desenvolvedores</h1>
                    <p>Dev-Pedia é uma plataforma colaborativa onde desenvolvedores de todo o mundo compartilham seus conhecimentos, experiências e soluções. Nascida da ideia de que, juntos, podemos ir mais longe, a Dev-Pedia tornou-se o ponto de encontro para especialistas e novatos no campo da programação.</p>
                    
                    <h2>Por que fazer parte da Dev-Pédia?</h2>
                    <ul>
                        <li><strong>Colaboração:</strong> A colaboração é a essência da Dev-Pedia. Aqui, cada contribuição importa e ajuda a comunidade a crescer e se fortalecer.</li>
                        <li><strong>Aprendizado Contínuo:</strong> Com um fluxo constante de conteúdo novo e atualizado, há sempre algo novo para aprender, independentemente do seu nível de experiência.</li>
                        <li><strong>Rede de Contatos:</strong> Conecte-se com desenvolvedores do mundo todo, troque experiências e expanda sua rede de contatos.</li>
                        <li><strong>Reconhecimento:</strong> Seu esforço e colaboração são reconhecidos. Ao contribuir, você não só ajuda outros, mas também estabelece sua presença e expertise na comunidade.</li>
                    </ul>

                    <p>Acreditamos firmemente que a colaboração e a partilha de conhecimentos são fundamentais para impulsionar a inovação e superar desafios. Seja você um veterano da indústria ou um novato entusiasmado, sua voz é valiosa. Sua experiência e perspectiva única podem ser exatamente o que alguém precisa para superar um desafio.</p>

                    <p>Então, junte-se a nós e faça parte desta incrível jornada de aprendizado, compartilhamento e crescimento!</p>
                </section>
            </main>
        </div>
    );
}

export default HomePage;
