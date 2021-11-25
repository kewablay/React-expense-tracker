import React,{ useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

import { Transaction } from './Transaction'

export const TransactionList = () => {
    const [transactions] = useContext(TransactionContext);
    

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                
            </ul>
        </>
    )
}
