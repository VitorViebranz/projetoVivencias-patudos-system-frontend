import styled from "../../styles/styled";
import { iconButtonToneStyles } from "../../styles/primitives";

const StyledIconButton = styled.button`
  & {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 0.75rem;
    background: transparent;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      transform 0.2s ease;
  }

  ${({
    $tone = "neutral"
  }) => iconButtonToneStyles[$tone] || iconButtonToneStyles.neutral}

  &:hover {
    transform: translateY(-1px);
  }
`;

function IconButton({ tone = "neutral", type = "button", ...props }) {
  return <StyledIconButton $tone={tone} type={type} {...props} />;
}

export default IconButton;
