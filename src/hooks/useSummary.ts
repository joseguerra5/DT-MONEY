import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionContext"

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)
  
  //reduce reduz o array a uma nova estrutura de dados {income: 0, outcome: 0, total: 0}
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        //se a transação for income então adiciona no acumulator income o preço e depois soma no total
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        //se a transação for outcome então adiciona no acumulator outcome o preço e depois reduz no total
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc;
    }, 
    {
      income: 0, 
      outcome: 0, 
      total: 0
    })

    return summary
}