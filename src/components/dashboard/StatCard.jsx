import Card from "../ui/Card";
import styled from "../../styles/styled";

const colorStyles = {
  blue: { background: "#e0f2fe", color: "#0369a1" },
  green: { background: "#dcfce7", color: "#15803d" },
  yellow: { background: "#fef3c7", color: "#b45309" },
  purple: { background: "#f3e8ff", color: "#7e22ce" },
  red: { background: "#ffe4e6", color: "#be123c" }
};

const StatCardRoot = styled(Card)`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const Content = styled.div`
  & {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const Title = styled.p`
  & {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
  }
`;

const Value = styled.h2`
  & {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    color: #0f172a;
  }
`;

const Subtitle = styled.p`
  & {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 500;
    color: #15803d;
  }
`;

const IconWrap = styled.div`
  & {
    display: flex;
    width: 2.75rem;
    height: 2.75rem;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    background: ${({ $background }) => $background};
    color: ${({ $color }) => $color};
  }
`;

function StatCard({ title, value, subtitle, icon: Icon, color = "blue" }) {
  const iconStyle = colorStyles[color] || colorStyles.blue;

  return (
    <StatCardRoot>
      <Content>
        <Title>{title}</Title>
        <Value>{value}</Value>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>

      <IconWrap $background={iconStyle.background} $color={iconStyle.color}>
        {Icon && <Icon size={20} />}
      </IconWrap>
    </StatCardRoot>
  );
}

export default StatCard;
