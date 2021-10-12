import React, { useEffect, useState } from 'react';
import TokenService from '../services/token-service';
import { TransactionsService } from '../services/transactions-service';

export const TransactionsContext = React.createContext({
  transactions: [],
  setTransactions: () => {},
  getTransactions: () => {},
  clearTransactions: () => {},
  setError: () => {},
  clearError: () => {},
  filterTransactions: () => {},
  transaction: null,
  setTransaction: () => {},
  createTransaction: false,
  setCreateTransaction: () => {},
  editTransaction: false,
  setEditTransaction: () => {},
  saveTransaction: () => {},
  deleteTransaction: () => {},
})

export const TransactionsProvider = props => {
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState(null)
  const [createTransaction, setCreateTransaction] = useState(false)
  const [editTransaction, setEditTransaction] = useState(false)
  const [error, setError] = useState(null);

  const clearTransactions = () => setTransactions([]);
  const clearError = () => setError(null);

  const filterTransactions = (transactions, property, value) => {
    return transactions.filter(trx => trx[property] === value);
  };

  const sortTransactions = (transactions, property = null) => {
    if (property === null) {
      return transactions.sort((a, b) => a - b);
    }
    return transactions.sort((a, b) => a[property] - b[property]);
  }

  const getTransactions = async () => {
    try {
      const { income, expenses } = await TransactionsService.getAllTransactions()
      income.forEach(item => item.type = 'income')
      expenses.forEach(item => item.type = 'expenses')
      const sortedTransactions = sortTransactions([...income, ...expenses], 'date_created')
      setTransactions(sortedTransactions)
      console.log(sortedTransactions)
    }
    catch(error) {
      console.log(error)
    }
  }

  const saveTransaction = async trx => {
    const response = createTransaction
      ? await TransactionsService.createTransaction(trx)
      : await TransactionsService.updateTransaction(trx)

    await getTransactions()

    return
  }

  const deleteTransaction = async (type, id) => {
    await TransactionsService.deleteTransaction(type, id)

    await getTransactions()

    return
  }

  useEffect(() => {TokenService.hasAuthToken() && getTransactions()}, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        getTransactions,
        transaction,
        setTransaction,
        clearTransactions,
        error,
        setError,
        clearError,
        filterTransactions,
        createTransaction,
        setCreateTransaction,
        editTransaction,
        setEditTransaction,
        saveTransaction,
        deleteTransaction,
      }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
}