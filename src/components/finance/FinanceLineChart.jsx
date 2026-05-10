function FinanceLineChart({ data, title = "Evolução Financeira" }) {
  if (!data || !data.length) {
    return (
      <div className="bg-white rounded-2xl p-4 border border-slate-200">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-sm text-slate-500">Nenhum dado disponível para o período selecionado.</p>
      </div>
    );
  }

  const maxValue = Math.max(...data.map((d) => d.value), 1);
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
    <div className="bg-white rounded-2xl p-4 border border-slate-200">
      <div className="flex items-center justify-between mb-4 gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-slate-500">Período selecionado</span>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-full">
          <defs>
            <linearGradient id="financeLineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          <g className="text-slate-400 text-[8px]">
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

          <path d={linePath} fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d={`${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`}
            fill="url(#financeLineGradient)"
            opacity="0.45"
          />

          {points.map((point, index) => (
            <g key={index}>
              <circle cx={point.x} cy={point.y} r="5" fill="#0ea5e9" stroke="#fff" strokeWidth="2" />
              <text x={point.x} y={point.y - 12} textAnchor="middle" className="text-[8px] fill-slate-700">
                {point.value.toLocaleString("pt-BR")}
              </text>
              <text x={point.x} y={height - 12} textAnchor="middle" className="text-[8px] fill-slate-600">
                {point.month}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default FinanceLineChart;
