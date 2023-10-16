import React from 'react';
import '../../Styles/RegisterPage.css';

const RegisterPage = () => {
    return (
        <div className="register-container">
            <h1>Dev-Media</h1>
            <p className="slogan">a Wikipédia dos Desenvolvedores</p>
            
            <div className="register-form">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Register</button>
            </div>
        </div>
    );
}

export default RegisterPage;
