import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SumaryCard, SumaryContainer } from "./styles";

export function Summary() {
  return (
    <SumaryContainer>
      <SumaryCard>
        <header><span>Entradas</span> <ArrowCircleUp size={32} color="#00B37E"/></header>
        <strong>R$ 17.400,00</strong>
      </SumaryCard>

      <SumaryCard>
        <header><span>Saídas</span> <ArrowCircleDown size={32} color="#F03847"/></header>
        <strong>R$ 17.400,00</strong>
      </SumaryCard>

      <SumaryCard variant="green">
        <header><span>Total</span> <CurrencyDollar size={32} color="#ffffff"/></header>
        <strong>R$ 17.400,00</strong>
      </SumaryCard>
    </SumaryContainer>
  )
}