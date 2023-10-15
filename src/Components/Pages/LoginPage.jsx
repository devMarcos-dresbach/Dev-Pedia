import React from 'react';
import '../Styles/LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-container">
            <h1>Dev-Media</h1>
            <p className="slogan">a Wikipédia dos Desenvolvedores</p>
            
            <div className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;
