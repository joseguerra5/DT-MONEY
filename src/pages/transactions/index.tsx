
import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";



export function Transaction() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <div>
      <Header />
      <Summary />

      <SearchForm />
      <TransactionContainer>
        <TransactionTable>

          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                  {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
              )
            })}
           
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}