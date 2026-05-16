import styled from "../../styles/styled";
import { surfaceCardStyles } from "../../styles/primitives";

const TableWrapper = styled.div`
  ${surfaceCardStyles}
  & {
    overflow-x: auto;
    border-radius: 1.5rem;
  }
`;

const Table = styled.table`
  & {
    min-width: 100%;
    border-collapse: collapse;
  }
`;

const TableHead = styled.thead`
  & {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(254, 243, 199, 0.7);
    backdrop-filter: blur(8px);
  }
`;

const HeaderCell = styled.th`
  & {
    padding: 0.875rem 1.5rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #64748b;
  }
`;

const Body = styled.tbody`
  & > tr + tr {
    border-top: 1px solid #e2e8f0;
  }
`;

const Row = styled.tr`
  &:hover {
    background: rgba(254, 243, 199, 0.6);
  }
`;

const Cell = styled.td`
  & {
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    color: #0f172a;
    vertical-align: middle;
  }
`;

const EmptyCell = styled.td`
  & {
    padding: 1.5rem;
    text-align: center;
    font-size: 0.875rem;
    color: #64748b;
  }
`;

const resolveRowKey = (row, rowIndex, rowKey) => {
  if (typeof rowKey === "function") {
    return rowKey(row, rowIndex);
  }

  return row?.[rowKey] ?? rowIndex;
};

const DataTable = ({
  actions,
  columns,
  data,
  emptyMessage = "Sem registros",
  rowKey = "id",
  tableClassName = ""
}) => (
  <TableWrapper className={tableClassName}>
    <Table>
      <TableHead>
        <tr>
          {columns.map((column) => (
            <HeaderCell key={column.key || column.label}>
              {column.label}
            </HeaderCell>
          ))}
          {actions && <HeaderCell>Acoes</HeaderCell>}
        </tr>
      </TableHead>
      <Body>
        {data.length === 0 && (
          <tr>
            <EmptyCell colSpan={columns.length + (actions ? 1 : 0)}>
              {emptyMessage}
            </EmptyCell>
          </tr>
        )}
        {data.map((row, rowIndex) => (
          <Row key={resolveRowKey(row, rowIndex, rowKey)}>
            {columns.map((column) => (
              <Cell key={column.key || column.label} className={column.className}>
                {column.render ? column.render(row[column.key], row) : row[column.key]}
              </Cell>
            ))}
            {actions && <Cell>{actions(row)}</Cell>}
          </Row>
        ))}
      </Body>
    </Table>
  </TableWrapper>
);

export default DataTable;
