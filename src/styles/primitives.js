import { css } from "./styled";

export const surfaceCardStyles = css`
  & {
    background: var(--app-surface);
    border: 1px solid var(--app-border);
    box-shadow: 0 8px 24px rgba(30, 41, 59, 0.06);
  }
`;

export const fieldControlStyles = css`
  & {
    width: 100%;
    border: 1px solid var(--app-border);
    border-radius: 1rem;
    background: #ffffff;
    color: var(--app-ink);
    padding: 0.625rem 0.875rem;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  }

  &::placeholder {
    color: var(--app-muted);
  }

  &:focus {
    border-color: var(--app-accent);
    box-shadow: 0 0 0 4px var(--app-accent-weak);
  }
`;

export const buttonBaseStyles = css`
  & {
    display: inline-flex;
    align-items: center;
    justify-content: ${({ $justify = "center" }) => $justify};
    gap: 0.5rem;
    border-radius: 1rem;
    border: 1px solid transparent;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
    transform: none;
    box-shadow: none;
  }
`;

export const buttonVariantStyles = {
  primary: css`
    & {
      background: var(--app-accent);
      border-color: transparent;
      color: #ffffff;
    }

    &:hover {
      background: var(--app-accent-strong);
    }
  `,
  secondary: css`
    & {
      background: #ffffff;
      border-color: var(--app-border);
      color: #334155;
    }

    &:hover {
      background: #f8fafc;
      border-color: #d6cfc2;
    }
  `,
  ghost: css`
    & {
      background: transparent;
      border-color: transparent;
      color: #334155;
      box-shadow: none;
    }

    &:hover {
      background: #f1f5f9;
    }
  `,
  danger: css`
    & {
      background: #e11d48;
      border-color: transparent;
      color: #ffffff;
    }

    &:hover {
      background: #be123c;
    }
  `
};

export const buttonSizeStyles = {
  sm: css`
    & {
      padding: 0.375rem 0.75rem;
      font-size: 0.875rem;
    }
  `,
  md: css`
    & {
      padding: 0.625rem 1rem;
      font-size: 0.875rem;
    }
  `,
  lg: css`
    & {
      padding: 0.75rem 1.25rem;
      font-size: 1rem;
    }
  `,
  icon: css`
    & {
      height: 2.5rem;
      width: 2.5rem;
      padding: 0;
    }
  `
};

export const iconButtonToneStyles = {
  neutral: css`
    & {
      color: #475569;
    }

    &:hover {
      color: #0f172a;
      background: #f8fafc;
    }
  `,
  primary: css`
    & {
      color: #2563eb;
    }

    &:hover {
      color: #1d4ed8;
      background: rgba(37, 99, 235, 0.08);
    }
  `,
  danger: css`
    & {
      color: #e11d48;
    }

    &:hover {
      color: #be123c;
      background: rgba(225, 29, 72, 0.08);
    }
  `
};
