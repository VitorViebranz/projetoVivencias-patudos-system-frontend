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

const InputControl = styled.input`
  ${fieldControlStyles}
`;

const HelperText = styled.span`
  & {
    font-size: 0.75rem;
    color: var(--app-muted);
  }
`;

function Input({ helperText, id, label, name, ...props }) {
  const fieldId = id || name;

  return (
    <FieldStack>
      {label && <Label htmlFor={fieldId}>{label}</Label>}
      <InputControl id={fieldId} name={name} {...props} />
      {helperText && <HelperText>{helperText}</HelperText>}
    </FieldStack>
  );
}

export default Input;
