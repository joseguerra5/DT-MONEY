import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-700"]};
  height: 14rem;
  padding: 2.5rem 0;

`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-inline: auto;
  height: 14rem;
  
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  padding: 0 1.25rem;
  background-color: ${props => props.theme["green-500"]};
  border-radius: 6px;
  color: ${props => props.theme.white};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.theme["green-700"]};
  }
`