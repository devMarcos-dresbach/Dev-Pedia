import React from 'react';
import '../Styles/Header.css';

const Header = () => {
    return (
        <header className="wiki-header">
            <div className="header-logo">Dev-Pedia</div>
            <nav className="header-nav">
                {/* Adicione links de navegação conforme necessário */}
                <a href="/">Início</a>
                <a href="/about">Sobre</a>
                <a href="/contact">Contato</a>
            </nav>
        </header>
    );
}

export default Header;
