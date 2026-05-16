import { Link } from "react-router-dom";
import styled from "../../styles/styled";
import { buttonBaseStyles, buttonSizeStyles, buttonVariantStyles } from "../../styles/primitives";

const StyledLink = styled(Link)`
  ${buttonBaseStyles}
  ${({ $variant = "primary" }) => buttonVariantStyles[$variant] || buttonVariantStyles.primary}
  ${({ $size = "md" }) => buttonSizeStyles[$size] || buttonSizeStyles.md}
`;

function ButtonLink({ to, children, justify = "center", size = "md", variant = "primary", ...props }) {
  return (
    <StyledLink
      to={to}
      $justify={justify}
      $size={size}
      $variant={variant}
      {...props}
    >
      {children}
    </StyledLink>
  );
}

export default ButtonLink;
