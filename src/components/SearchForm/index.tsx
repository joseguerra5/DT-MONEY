import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação"/>
      <button> <MagnifyingGlass size={20} /> buscar</button>
    </SearchFormContainer>
  )
}