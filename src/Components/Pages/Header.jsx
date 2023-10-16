import React, { useState } from 'react';
import '../../Styles/Header.css';


const DropdownMenu = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button className="dropbtn">{title}</button>
            {isOpen && (
                <div className="dropdown-content">
                    {items.map(item => (
                        <a href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                    ))}
                </div>
            )}
        </div>
    );
};

const Header = () => {
    const menuItems = [
        { title: 'Linguagens & Frameworks', items: ['JavaScript', 'Angular', 'React', 'Java', 'CSS', 'HTML'] },
        { title: 'Banco de Dados', items: ['NoSQL', 'Relational', 'Databases'] },
        { title: 'Infraestrutura & Ferramentas', items: ['Docker', 'Integration', 'IDEs', 'Servers', 'Middlewares'] },
        { title: 'Padrões & Práticas', items: ['Patterns', 'Editor'] },
        { title: 'Notícias & Fóruns', items: ['News', 'Forums'] },
        { title: 'Outros', items: ['Contato', 'Sobre'] }
    ];

    return (
        <header className="devpedia-header">
            <div className="brand">
                <div className="brand-name">Dev-Pedia</div>
                <div className="description">A Enciclopédia dos Desenvolvedores</div>
            </div>
            <nav className="main-nav">
                {menuItems.map(menu => (
                    <DropdownMenu title={menu.title} items={menu.items} />
                ))}
            </nav>
            <div className="login-tools">
                Entrar
            </div>
        </header>
    );
}

export default Header;
