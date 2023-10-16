import React from 'react';
import '../../Styles/Footer.css';
import Header from './Header';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Esta página foi editada pela última vez às 11.00 de 15 de outubro de 2023.</p>
            <p>Este texto é disponibilizado nos termos da licença <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt">Atribuição-CompartilhaIgual 4.0 Internacional (CC BY-SA 4.0)</a> da Creative Commons; pode estar sujeito a condições adicionais. Para mais detalhes, consulte as <a href="/condicoes">condições de utilização</a>.</p>
            <div className="footer-links">
                <a href="/privacidade">Política de privacidade</a>
                <a href="/sobre">Sobre a Dev-Pedia</a>
                <a href="/avisos">Avisos gerais</a>
                <a href="/conduta">Código de conduta</a>
                <a href="/programadores">Programadores</a>
                <a href="/estatisticas">Estatísticas</a>
                <a href="/cookies">Declaração sobre ''cookies''</a>
                <a href="/mobile">Versão móvel</a>
            </div>
        </footer>
    );
}

export default Footer;
