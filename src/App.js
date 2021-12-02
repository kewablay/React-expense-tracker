import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <GlobalProvider>
          <div className="expense-detail">
            <Balance />
            <IncomeExpenses />
          </div>
          <TransactionList />
          <AddTransaction />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
