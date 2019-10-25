import React from 'react';
import './App.css';
import TabPanel from './components/Tab';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="main" >
        <div className="total-card">Totál</div>
        <div className="diagram-card">
          <TabPanel />
        </div>
        <div className="transactions-card">
          Rongyrázások
        </div>
      </main>
    </>
  );
}

export default App;
