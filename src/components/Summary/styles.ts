import { css, styled } from "styled-components";

export const SumaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  gap: 2rem;
`
interface SumaryCardProps {
  variant?: "green"
}

export const SumaryCard = styled.div<SumaryCardProps>`
  background-color: ${props => props.theme["gray-500"]};
  height: 137px;
  padding: 1.5rem 2rem;
  border-radius: 6px;
  margin-top: -5rem;

  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]};
  }

  & strong {
    font-weight: bold;
    font-size: 2rem;
    color: ${props => props.theme["white"]}
  }
  ${props => props.variant === "green" && css`
    background-color: ${props => props.theme["green-700"]}
  `}
`