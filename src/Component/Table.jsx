import React from 'react';
import PriceAccordion from './PriceAccordion.jsx';
import Poultry from './Poultry.jsx';
import Fish from './Fish.jsx';
import Food from './Food.jsx';
import Chicken from './Chicken.jsx';

const Table = () => {
  return (
    <>
      <Food />

      <Fish />

      <Poultry />

      <Chicken />

      <PriceAccordion />
    </>
  );
};

export default Table;
