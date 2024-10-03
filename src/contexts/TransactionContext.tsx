import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}


//cria um contexto com o createContext e cria uma interface com um array vazio com a interface do objeto requerido e coloca as TransactionContextType para não dar erro
export const TransactionsContext = createContext({
} as TransactionContextType)

//o tipo do children tem que ser o ReactNode que é qualquer coisa que é válida no React
interface TransactionProviderProps {
  children: ReactNode;
}

//retorna um provider que vai em volta de tudo e da contexto aos filhos
export function TransactionsProvider({ children }: TransactionProviderProps) {

  //armazena as informações dentro do estado para percorrer as info
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {

    //faz o fetch chamando todos as info da BD
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      }
    })
    //armazena a resposta dentro do estado
    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const {category,description,price,type} = data
    const response = await api.post("transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [...state, response.data])
  }
  useEffect(() => {
    //carrega a função sempre que a página é carregada
    fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}