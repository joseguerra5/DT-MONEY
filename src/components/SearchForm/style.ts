import styled from "styled-components";

export const SearchFormContainer = styled.form`
      display: flex;
      width: 100%;
      max-width: 1120px;
      margin-inline: auto;
      margin-top: 4rem;
      gap: 1rem;
      & input {
        flex: 1;
        background-color: ${props => props.theme["gray-700"]};
        border: 0;
        padding: 1rem;
        border-radius: 6px;
        color: ${props => props.theme["gray-100"]};
      }

      & button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        color: ${props => props.theme["green-500"]};
        border: 2px solid ${props => props.theme["green-500"]};
        border-radius: 6px;
        background-color: transparent;
        padding: 1rem;
        transition: background-color .2s, color .2s;
        cursor: pointer;

        &:hover {
          background-color: ${props => props.theme["green-500"]};
          color: ${props => props.theme["white"]};
        }
      }
`