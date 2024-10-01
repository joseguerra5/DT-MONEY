import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SumaryCard, SumaryContainer } from "./styles";

export function Summary() {
  return (
    <SumaryContainer>
      <SumaryCard>
        <header><span>Entradas</span> <ArrowCircleUp /></header>
        <strong>R$ 17.400,00</strong>
      </SumaryCard>

      <SumaryCard>
        <header><span>Saídas</span> <ArrowCircleDown /></header>
        <strong>R$ 17.400,00</strong>
      </SumaryCard>

      <SumaryCard>
        <header><span>Total</span> <CurrencyDollar /></header>
        <strong>R$ 17.400,00</strong>
      </SumaryCard>
    </SumaryContainer>
  )
}