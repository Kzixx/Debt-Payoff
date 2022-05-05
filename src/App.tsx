import React from 'react';
import Header from './components/Header';
import PaymentSim from './components/PaymentSim';
import GlobalStyles from './GlobalStyles.styled';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PaymentSim />
    </>
  );
}

export default App;