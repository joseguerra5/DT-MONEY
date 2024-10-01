import { styled } from "styled-components";

export const SumaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  gap: 2rem;
`
interface SumaryCardProps {
  variant?: "red" | "green"
}

export const SumaryCard = styled.div<SumaryCardProps>`
  background-color: ${props => props.theme["gray-400"]};
  height: 137px;
  padding: 1.5rem 2rem;
  border-radius: 6px;
  margin-top: -5rem;
`