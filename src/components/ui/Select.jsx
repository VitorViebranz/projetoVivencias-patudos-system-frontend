import styled from "../../styles/styled";
import { fieldControlStyles } from "../../styles/primitives";

const FieldStack = styled.div`
  & {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }
`;

const Label = styled.label`
  & {
    font-size: 0.875rem;
    color: #475569;
  }
`;

const SelectControl = styled.select`
  ${fieldControlStyles}
  & {
    appearance: none;
    background-image:
      linear-gradient(45deg, transparent 50%, #64748b 50%),
      linear-gradient(135deg, #64748b 50%, transparent 50%);
    background-position:
      calc(100% - 1.15rem) calc(50% - 0.125rem),
      calc(100% - 0.8rem) calc(50% - 0.125rem);
    background-size: 0.35rem 0.35rem, 0.35rem 0.35rem;
    background-repeat: no-repeat;
    padding-right: 2.5rem;
  }
`;

const HelperText = styled.span`
  & {
    font-size: 0.75rem;
    color: var(--app-muted);
  }
`;

function Select({ label, helperText, id, name, children, ...props }) {
  const fieldId = id || name;

  return (
    <FieldStack>
      {label && <Label htmlFor={fieldId}>{label}</Label>}
      <SelectControl id={fieldId} name={name} {...props}>
        {children}
      </SelectControl>
      {helperText && <HelperText>{helperText}</HelperText>}
    </FieldStack>
  );
}

export default Select;
