import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { styled } from 'styled-components';


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;


  inset: 0;
  background: rgba(0, 0, 0, .75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${props => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2.5rem 3rem;
  min-width: 32rem;
  color: ${props => props.theme['gray-100']};



  transform: translate(-50%, -50%);

   & form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

    & input {
      border-radius: 6px;
      border: 0;
      background: ${props => props.theme['gray-700']};
      padding: 1rem;
      color: ${props => props.theme['gray-100']};
    }

    & button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${props => props.theme['green-500']};
      border-radius: 6px;
      font-weight: bold;
      color: ${props => props.theme['gray-100']};
      transition: background-color 0.2s;
      &:hover {
        background: ${props => props.theme['green-700']};
      }
    }
   }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: .5rem;
`

interface TransactionTypeButtonProps {
  variant: "income" | "outcome"
}

export const TransactionButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${props => props.theme['gray-500']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border: 0;

  cursor: pointer;
  border-radius: 6px;
  color: ${props => props.theme['gray-300']};

  svg {
    color: ${props => props.variant === "income" ? props.theme['green-500'] : props.theme['red-500']};
  }

  &[data-state="unchecked"]:hover {
    background: ${props =>  props.theme['gray-400']};
  }

  &[data-state="checked"] {
    color: ${props => props.theme['white']};

    background: ${props => props.variant === "income" ? props.theme['green-500'] : props.theme['red-500']};



    svg {
      color: ${props => props.theme['white']};
    }
  }
`
