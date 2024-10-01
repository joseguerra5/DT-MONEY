import iconLogo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={iconLogo} alt="" />
        <NewTransactionButton>Nova Transção</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}