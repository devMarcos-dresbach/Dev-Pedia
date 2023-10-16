import React from 'react';
import '../../Styles/Dashboard.css';

const ForumDashboard = () => {
    return (
        <div className="forum-container">
            <header className="forum-header">
                <h1>Nome do Seu Fórum</h1>
                <div>
                    <input type="text" placeholder="Buscar no fórum..." />
                    <div className="user-dropdown">
                        <img className="user-img" src="path/to/user/profile.jpg" alt="user profile" />
                        <div className="user-dropdown-content">
                            <a href="#">Perfil</a>
                            <a href="#">Configurações</a>
                            <a href="#">Sair</a>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="forum-nav">
                <button>Home</button>
                <button>Explorar</button>
                <button>Notificações</button>
                <button>Mensagens</button>
                <div className="dropdown">
                    <button className="dropbtn">Perfil</button>
                    <div className="dropdown-content">
                        <a href="#">Meus posts</a>
                        <a href="#">Configurações</a>
                    </div>
                </div>
            </nav>

            <div className="forum-content">
                <aside className="forum-sidebar">
                    <h3>Top Tópicos</h3>
                    <ul>
                        {["Tópico 1", "Tópico 2", "Tópico 3"].map(topic => (
                            <li key={topic}><a href="#">{topic}</a></li>
                        ))}
                    </ul>
                </aside>

                <section className="posts">
                    <div className="post-input">
                        <textarea placeholder="O que você está pensando?"></textarea>
                        <button>Publicar</button>
                    </div>
                    {[1, 2, 3].map(id => (
                        <div key={id} className="post">
                            <img src="path/to/user/profile.jpg" alt="user profile" />
                            <div>
                                <h4>NomeDeUsuario</h4>
                                <p>Esta é uma postagem de exemplo no fórum.</p>
                                <button>Seguir</button>
                            </div>
                        </div>
                    ))}
                </section>

                <aside className="forum-sidebar-right">
                    <h3>Quem seguir</h3>
                    {[1, 2, 3].map(id => (
                        <div key={id} className="user-recommendation">
                            <img src="path/to/user/profile.jpg" alt="user profile" />
                            <p>NomeDeUsuario</p>
                            <button>Seguir</button>
                        </div>
                    ))}
                </aside>
            </div>
        </div>
    );
}

export default ForumDashboard;
