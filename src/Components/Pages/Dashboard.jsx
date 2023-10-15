import React from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <section className="stats-section">
                    <h2>Statistics</h2>
                    {/* Aqui você pode adicionar gráficos, contadores, etc. */}
                </section>

                <section className="links-section">
                    <h2>Quick Links</h2>
                    {/* Links rápidos para partes importantes do site ou funcionalidades */}
                </section>

                <section className="notifications-section">
                    <h2>Notifications</h2>
                    {/* Listar notificações ou atualizações importantes */}
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
