import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transactions from "./Transactions";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul  className="list">
        {transactions.map((item)=>(<Transactions key={item.id} item={item}/>))}
      </ul>
    </div>
  );
};

export default TransactionList;
