import React from 'react';
import '../Styles/Home.css';

const HomePage = () => {
    return (
        <div className="wikipedia-container">
            <main className="wikipedia-main">
                <section className="search-section">
                    <input type="text" placeholder="Search Dev-Pedia..." className="search-input" />
                    <button className="search-button">Search</button>
                </section>
                
                <section className="info-section">
                    <p>Welcome to Dev-Pedia, the free encyclopedia that developers can edit.</p>
                </section>
            </main>
        </div>
    );
}

export default HomePage;
