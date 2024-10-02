import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
  return(
    <Dialog.Portal>
    <Overlay />

    <Content>
      <Dialog.Title>Nova Transação</Dialog.Title>
      <CloseButton>
        <X size={24}/>
      </CloseButton >
        <form action="">
          <input type="text" placeholder='Descrição'/>
          <input type="number" placeholder='Preço'/>
          <input type="text" placeholder='Categoria'/>
          <TransactionType>
            <TransactionButton value='income' variant='income'>
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionButton>
            <TransactionButton value='outcome' variant='outcome'>
              <ArrowCircleDown size={24}/>
              Saída
            </TransactionButton>
          </TransactionType>
          <button type='submit'>Cadastrar</button>
        </form>
      
    </Content>
  </Dialog.Portal>
  )
}