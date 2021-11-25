import './App.css';
import { TransactionProvider } from './context/TransactionContext';

import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';



function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <TransactionProvider >
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </TransactionProvider>
        
      </div>
    </div>
  );
}

export default App;
