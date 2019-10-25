import React from 'react';
import './App.css';
import TabPanel from './components/Tab';
import Navbar from './components/Navbar';
import TransactionsHeader from './components/TransactionsHeader';
import { Paper, Typography } from '@material-ui/core';
import Kolteslistazo from './components/Kolteslista';

function App() {
  return (
    <>
      <Navbar />
      <main className="main" >
        <div className="total-card">
          <Paper style={{ padding: '24px 16px', height: '300px' }}>
            <Typography component="p">
              Eddigi eltékozolt pénzed:
              </Typography>
            <Typography variant="h5" component="h3">
              20 000 Ft
            </Typography>
          </Paper>
        </div>
        <div className="diagram-card">
          <TabPanel />
        </div>
        <div className="transactions-card">
          <TransactionsHeader />
          <Kolteslistazo />
        </div>
      </main>
    </>
  );
}

export default App;
