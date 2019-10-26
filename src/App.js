import React from 'react';
import './App.css';
import SimpleTabs from './components/Tab';
import Navbar from './components/Navbar';
import TransactionsHeader from './components/TransactionsHeader';
import { Paper, Typography } from '@material-ui/core';
import Kolteslistazo from './components/Kolteslista';
import { connect } from 'react-redux';

function App(props) {
  props.loadTransactions();

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
          <SimpleTabs />
        </div>
        <div className="transactions-card">
          <TransactionsHeader />
          <Kolteslistazo />
        </div>
      </main>
    </>
  );
}

function fetchTransactions() {
  return function (dispatch) {
    fetch('https://5d88cdb9feddff0014e15fd6.mockapi.io/transactions', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'SUCCESFULLY_LOADED_TRANSACTIONS',
          payload: data
        });
      })
      .catch((error) => {
        dispatch({
          type: 'UNSUCCESFULLY_LOADED_TRANSACTIONS',
          payload: error
        });
      });
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTransactions: () => dispatch(fetchTransactions()),
  }
}

export default connect(null, mapDispatchToProps)(App);
