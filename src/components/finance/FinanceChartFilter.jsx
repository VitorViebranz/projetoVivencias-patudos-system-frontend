import styled from "../../styles/styled";
import { fieldControlStyles } from "../../styles/primitives";

const Wrapper = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const SegmentedGroup = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const RangeButton = styled.button`
  & {
    border: 1px solid ${({ $active }) => ($active ? "#020617" : "#cbd5e1")};
    border-radius: 999px;
    background: ${({ $active }) => ($active ? "#020617" : "#ffffff")};
    color: ${({ $active }) => ($active ? "#ffffff" : "#334155")};
    cursor: pointer;
    padding: 0.375rem 0.875rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  &:hover {
    background: ${({ $active }) => ($active ? "#020617" : "#f8fafc")};
  }
`;

const YearField = styled.label`
  & {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #475569;
  }
`;

const YearLabel = styled.span`
  & {
    font-weight: 500;
  }
`;

const YearSelect = styled.select`
  ${fieldControlStyles}
  & {
    width: auto;
    min-width: 6rem;
    border-radius: 999px;
    padding-block: 0.4rem;
    padding-inline: 0.875rem 2.2rem;
    appearance: none;
    background-image:
      linear-gradient(45deg, transparent 50%, #64748b 50%),
      linear-gradient(135deg, #64748b 50%, transparent 50%);
    background-position:
      calc(100% - 1rem) calc(50% - 0.125rem),
      calc(100% - 0.65rem) calc(50% - 0.125rem);
    background-size: 0.35rem 0.35rem, 0.35rem 0.35rem;
    background-repeat: no-repeat;
  }
`;

function FinanceChartFilter({ selectedRange, onRangeChange, selectedYear, onYearChange, years }) {
  const options = [
    { key: "trimestre", label: "Trimestre" },
    { key: "semestre", label: "Semestre" },
    { key: "anual", label: "Anual" }
  ];

  return (
    <Wrapper>
      <SegmentedGroup>
        {options.map((option) => (
          <RangeButton
            key={option.key}
            $active={selectedRange === option.key}
            onClick={() => onRangeChange(option.key)}
            type="button"
          >
            {option.label}
          </RangeButton>
        ))}
      </SegmentedGroup>

      <YearField>
        <YearLabel>Ano</YearLabel>
        <YearSelect
          value={selectedYear}
          onChange={(event) => onYearChange(event.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </YearSelect>
      </YearField>
    </Wrapper>
  );
}

export default FinanceChartFilter;
