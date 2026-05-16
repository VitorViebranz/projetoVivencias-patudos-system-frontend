import Modal from "./Modal";
import Button from "./Button";
import styled from "../../styles/styled";

const Message = styled.p`
  & {
    margin: 0;
    font-size: 0.875rem;
    color: #475569;
    line-height: 1.6;
  }
`;

function ConfirmDialog({ isOpen, title, message, confirmLabel = "Confirmar", cancelLabel = "Cancelar", onConfirm, onCancel }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      title={title}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </>
      }
    >
      <Message>{message}</Message>
    </Modal>
  );
}

export default ConfirmDialog;
