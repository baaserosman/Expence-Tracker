import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);
  let income = 0;
  let expense = 0;
  transactions.map((item) => {
    return item.amount > 0 ? (income += item.amount) : (expense += item.amount);
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpence;
