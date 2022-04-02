import "./App.css";
import AddTransaction from "./compenets/AddTransaction";
import Balance from "./compenets/Balance";
import Header from "./compenets/Header";
import IncomeExpence from "./compenets/IncomeExpence";
import TransactionList from "./compenets/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />

        <div className="container"></div>
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
