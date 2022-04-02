import React from "react";
import Transactions from "./Transactions";

const TransactionList = () => {
  return (
    <>
      <ul id="list" class="list">
        <Transactions />
      </ul>
    </>
  );
};

export default TransactionList;
