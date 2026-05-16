import styled from "../../styles/styled";

const Row = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid #e2e8f0;
    padding: 0.75rem 0;
    font-size: 0.875rem;
  }
`;

const Title = styled.p`
  & {
    margin: 0;
    color: #1e293b;
  }
`;

const Time = styled.span`
  & {
    color: #64748b;
  }
`;

function ActivityItem({ title, time }) {
  return (
    <Row>
      <Title>{title}</Title>
      <Time>{time}</Time>
    </Row>
  );
}

export default ActivityItem;
