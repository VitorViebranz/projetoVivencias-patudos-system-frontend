import Card from "../ui/Card";
import styled from "../../styles/styled";

const ChartCard = styled(Card)`
  & {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Header = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const Title = styled.h3`
  & {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

const Period = styled.span`
  & {
    font-size: 0.875rem;
    color: #64748b;
  }
`;

const EmptyText = styled.p`
  & {
    margin: 0;
    font-size: 0.875rem;
    color: #64748b;
  }
`;

const ScrollArea = styled.div`
  & {
    overflow-x: auto;
  }
`;

const StyledSvg = styled.svg`
  & {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

function FinanceLineChart({ data, title = "Evolucao Financeira" }) {
  if (!data || !data.length) {
    return (
      <ChartCard>
        <Title>{title}</Title>
        <EmptyText>Nenhum dado disponivel para o periodo selecionado.</EmptyText>
      </ChartCard>
    );
  }

  const maxValue = Math.max(...data.map((item) => item.value), 1);
  const padding = 34;
  const width = 520;
  const height = 260;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const points = data.map((item, index) => {
    const x = padding + (index * chartWidth) / Math.max(data.length - 1, 1);
    const y = height - padding - (item.value / maxValue) * chartHeight;

    return { ...item, x, y };
  });

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <ChartCard>
      <Header>
        <Title>{title}</Title>
        <Period>Periodo selecionado</Period>
      </Header>
      <ScrollArea>
        <StyledSvg viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <linearGradient id="financeLineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          <g fill="#94a3b8" fontSize="8">
            {Array.from({ length: 4 }).map((_, index) => {
              const y = padding + (chartHeight / 3) * index;
              const labelValue = Math.round(maxValue - (maxValue / 3) * index);

              return (
                <g key={index}>
                  <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                  <text x={padding - 10} y={y + 4} textAnchor="end">
                    {labelValue.toLocaleString("pt-BR")}
                  </text>
                </g>
              );
            })}
          </g>

          <path d={linePath} fill="none" stroke="#0ea5e9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path
            d={`${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`}
            fill="url(#financeLineGradient)"
            opacity="0.45"
          />

          {points.map((point, index) => (
            <g key={index}>
              <circle cx={point.x} cy={point.y} fill="#0ea5e9" r="5" stroke="#fff" strokeWidth="2" />
              <text x={point.x} y={point.y - 12} textAnchor="middle" fill="#334155" fontSize="8">
                {point.value.toLocaleString("pt-BR")}
              </text>
              <text x={point.x} y={height - 12} textAnchor="middle" fill="#475569" fontSize="8">
                {point.month}
              </text>
            </g>
          ))}
        </StyledSvg>
      </ScrollArea>
    </ChartCard>
  );
}

export default FinanceLineChart;
