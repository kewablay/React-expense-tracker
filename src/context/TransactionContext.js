import React, {createContext, useState} from 'react'


export const TransactionContext = createContext()

export const TransactionProvider = (props) => {
    const [transactions, setTransactions] = useState(
        [{id: 1, text: 'salary', amount: 450},
        {id: 2, text: 'food', amount: -20},
        {id: 3, text: 'allowance', amount: 20},
        {id: 4, text: 'transport', amount: -200},]
    )
    return (
        <div>
            <TransactionContext.Provider value={[transactions, setTransactions]}>
                {props.children}
            </TransactionContext.Provider>
        </div>
    )
}
