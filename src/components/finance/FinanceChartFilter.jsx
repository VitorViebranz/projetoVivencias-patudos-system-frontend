function FinanceChartFilter({ selectedRange, onRangeChange, selectedYear, onYearChange, years }) {
  const options = [
    { key: "trimestre", label: "Trimestre" },
    { key: "semestre", label: "Semestre" },
    { key: "anual", label: "Anual" }
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 mb-4">
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
              selectedRange === option.key
                ? "bg-slate-950 text-white border-slate-950"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
            onClick={() => onRangeChange(option.key)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-600">
        <span className="font-medium">Ano</span>
        <select
          className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700 outline-none focus:border-slate-900"
          value={selectedYear}
          onChange={(event) => onYearChange(event.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FinanceChartFilter;
