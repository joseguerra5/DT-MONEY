import styled from "styled-components";

export const TransactionContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin-inline: auto;
`

export const TransactionTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

  & td {
    background-color: ${props => props.theme["gray-500"]};
    padding: 1.125rem 2rem;
    color: ${props => props.theme["gray-200"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface PriceHighLight {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighLight>`
  color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-500"]}
`