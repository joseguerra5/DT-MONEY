import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SumaryCard, SumaryContainer } from "./styles";

import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  
  return (
    <SumaryContainer>
      <SumaryCard>
        <header><span>Entradas</span> <ArrowCircleUp size={32} color="#00B37E"/></header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SumaryCard>

      <SumaryCard>
        <header><span>Saídas</span> <ArrowCircleDown size={32} color="#F03847"/></header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SumaryCard>

      <SumaryCard variant="green">
        <header><span>Total</span> <CurrencyDollar size={32} color="#ffffff"/></header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SumaryCard>
    </SumaryContainer>
  )
}