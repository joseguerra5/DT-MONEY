import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as zod from "zod"
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../lib/axios';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionContext';

const NewTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"])
})

type NewTransactionFormInputs = zod.infer<typeof NewTransactionFormSchema>



export function NewTransactionModal() {
  const {createTransaction} = useContext(TransactionsContext)

  const { control, register, handleSubmit, formState: { isSubmitting }, reset } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: "income"
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const {category,description,price,type} = data

    await createTransaction ({
      category,
      description,
      price,
      type
    })
    reset()

  }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton >
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder='Descrição'
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder='Preço'
            required
            {...register("price", { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder='Categoria'
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({field}) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionButton value='income' variant='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionButton>
                  <TransactionButton value='outcome' variant='outcome'>
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionButton>
                </TransactionType>
          )
            }
            }
          />

          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}