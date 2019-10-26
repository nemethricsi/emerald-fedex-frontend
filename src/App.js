import React from 'react';
import './App.css';
import SimpleTabs from './components/Tab';
import Navbar from './components/Navbar';
import TransactionsHeader from './components/TransactionsHeader';
import { Paper, Typography } from '@material-ui/core';
import Kolteslistazo from './components/Kolteslista';
import { connect } from 'react-redux';
import DatepickerBegin from './components/begindate';
import DatepickerEnd from './components/enddate';
import sumCosts from './utilities/sum/sum';

function App(props) {
  props.loadTransactions();
  const costs = props.transactions.map(transaction => {
    return transaction.amount;
  })

  const total = sumCosts(costs);
  console.log(total);

  return (
    <>
      <Navbar />
      <main className="main" >
        <div className="total-card">
          <Paper style={{ padding: '24px 16px', height: '300px' }}>
            <DatepickerBegin />
            <DatepickerEnd />
            <Typography style={{ marginTop: '30px' }} component="p">
              Eddigi eltékozolt pénzed:
              </Typography>
            <Typography style={{ marginTop: '10px' }} variant="h2" component="h3">
              {total} Ft
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
    fetch('http://localhost:8080/transactions', {
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

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTransactions: () => dispatch(fetchTransactions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
