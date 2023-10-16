import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importação de Páginas
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer';
import AboutPage from './Components/Pages/AboutPage';
import LoginPage from './Components/Pages/LoginPage';
import RegisterPage from './Components/Pages/RegisterPage';
import Dashboard from './Components/Pages/Dashboard';
import ManageContent from './Components/Pages/ManageContent';
import ManageUsers from './Components/Pages/ManageUsers';
import Forums from './Components/Pages/Forums';
import Gallery from './Components/Pages/Gallery';
import Contributions from './Components/Pages/Contributions';
import Notifications from './Components/Pages/Notifications';
import Profile from './Components/Pages/Profile';
import Nosql from './Components/Pages/nosql';
import Relational from './Components/Pages/relational';
import Docker from './Components/Pages/docker';
import Integration from './Components/Pages/integration';
import Angular from './Components/Pages/Angular';
import ReactPage from './Components/Pages/ReactPage';
import Index from './Components/Pages/index';
import CSSPage from './Components/Pages/CSSPage';
import HTMLPage from './Components/Pages/HTMLPage';
import JavaPage from './Components/Pages/JavaPage';
import News from './Components/Pages/News';
import Patterns from './Components/Pages/Patterns';
import Editor from './Components/Pages/Editor';
import IDEs from './Components/Pages/IDEs';
import Databases from './Components/Pages/Databases';
import Middlewares from './Components/Pages/Middlewares';
import Servers from './Components/Pages/Servers';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <main className="App-content">
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/manage-content" element={<ManageContent />} />
                        <Route path="/manage-users" element={<ManageUsers />} />
                        <Route path="/forums" element={<Forums />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contributions" element={<Contributions />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/nosql" element={<Nosql />} />
                        <Route path="/relational" element={<Relational />} />
                        <Route path="/docker" element={<Docker />} />
                        <Route path="/integration" element={<Integration />} />
                        <Route path="/angular" element={<Angular />} />
                        <Route path="/react" element={<ReactPage />} />
                        <Route path="/css" element={<CSSPage />} />
                        <Route path="/html" element={<HTMLPage />} />
                        <Route path="/java" element={<JavaPage />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/patterns" element={<Patterns />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/ides" element={<IDEs />} />
                        <Route path="/databases" element={<Databases />} />
                        <Route path="/middlewares" element={<Middlewares />} />
                        <Route path="/servers" element={<Servers />} />
                    </Routes>
                    </main>
                <Footer />
            </div>
        </Router>
    );
}
export default App;
