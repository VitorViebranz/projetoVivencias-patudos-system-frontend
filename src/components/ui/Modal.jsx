import { useEffect, useId } from "react";
import styled from "../../styles/styled";
import { surfaceCardStyles } from "../../styles/primitives";

const sizeMap = {
  sm: "28rem",
  md: "36rem",
  lg: "48rem"
};

const Overlay = styled.div`
  & {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`;

const Backdrop = styled.button`
  & {
    position: absolute;
    inset: 0;
    border: none;
    background: rgba(15, 23, 42, 0.4);
    backdrop-filter: blur(6px);
    cursor: pointer;
  }
`;

const Dialog = styled.div`
  ${surfaceCardStyles}
  & {
    position: relative;
    width: min(100%, ${({ $size = "md" }) => sizeMap[$size] || sizeMap.md});
    border-radius: 1.5rem;
    padding: 1.5rem;
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.16);
  }
`;

const Header = styled.div`
  & {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const Title = styled.h2`
  & {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  & {
    border: 1px solid var(--app-border);
    border-radius: 0.75rem;
    background: #ffffff;
    color: #475569;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  }

  &:hover {
    border-color: #d6cfc2;
    color: #0f172a;
    background: #f8fafc;
  }
`;

const Body = styled.div`
  & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  & {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

function Modal({ isOpen, onClose, title, children, footer, size = "md" }) {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Backdrop aria-label="Fechar modal" onClick={onClose} type="button" />
      <Dialog
        $size={size}
        aria-labelledby={title ? titleId : undefined}
        aria-modal="true"
        role="dialog"
      >
        <Header>
          <div>{title && <Title id={titleId}>{title}</Title>}</div>
          <CloseButton onClick={onClose} type="button">
            Fechar
          </CloseButton>
        </Header>
        <Body>{children}</Body>
        {footer && <Footer>{footer}</Footer>}
      </Dialog>
    </Overlay>
  );
}

export default Modal;
