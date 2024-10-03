import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionContext";

const SeachFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof SeachFormSchema>

export function SearchForm() {
  const {fetchTransactions} = useContext(TransactionsContext)
  const {register, handleSubmit, formState: {isSubmitting}} = useForm<SearchFormInputs>({
    resolver: zodResolver(SeachFormSchema)
  })
  
  async function handleSeachTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSeachTransactions)}>
      <input 
        type="text" 
        placeholder="Busque uma transação"
        {...register("query")}  
      />
      <button disabled={isSubmitting}> <MagnifyingGlass size={20} /> buscar</button>
    </SearchFormContainer>
  )
}