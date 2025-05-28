import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import './styles/globals.css'
import './App.css';

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <Header />
    </div>
    <DashboardMainContent />
  </div>
);

export default App;