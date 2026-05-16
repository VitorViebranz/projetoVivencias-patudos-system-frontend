import styled from "../../styles/styled";
import { surfaceCardStyles } from "../../styles/primitives";

const paddingMap = {
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem"
};

const StyledCard = styled.div`
  ${surfaceCardStyles}
  & {
    border-radius: 1.5rem;
    padding: ${({ $padding = "md" }) => paddingMap[$padding] || paddingMap.md};
  }
`;

function Card({ children, padding = "md", ...props }) {
  return (
    <StyledCard $padding={padding} {...props}>
      {children}
    </StyledCard>
  );
}

export default Card;
