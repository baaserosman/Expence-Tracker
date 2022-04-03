import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addButton } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: +amount,
    };
    addButton(newItem);
    setText("");
    setAmount("");
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            id="text"
            required
            value={text}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            id="amount"
            required
            value={amount}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
