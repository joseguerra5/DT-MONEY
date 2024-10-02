import * as Dialog from '@radix-ui/react-dialog';
import iconLogo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={iconLogo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transção</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
          
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}