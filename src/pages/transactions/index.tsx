import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <SearchForm />
      <TransactionContainer>
        <TransactionTable>
          
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
                </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td>Desenvolvimento de site</td>
              <td>    <PriceHighlight variant="outcome">
                  R$ 12.000,00
                </PriceHighlight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>     
            
            <tr>
              <td>Desenvolvimento de site</td>
              <td>    <PriceHighlight variant="income">
                 - R$ 12.000,00
                </PriceHighlight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}