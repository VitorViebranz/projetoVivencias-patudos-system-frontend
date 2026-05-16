import { Link } from "react-router-dom";
import { Bell, Search, Settings, Menu } from "lucide-react";
import styled from "../../styles/styled";
import Button from "../ui/Button";
import ButtonLink from "../ui/ButtonLink";
import { fieldControlStyles } from "../../styles/primitives";

const HeaderShell = styled.div`
  & {
    position: sticky;
    top: 0;
    z-index: 20;
    border-bottom: 1px solid var(--app-border);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
  }
`;

const HeaderInner = styled.div`
  & {
    display: flex;
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.5rem;
  }

  @media (min-width: 640px) {
    & {
      padding-inline: 2rem;
    }
  }
`;

const SidebarToggleButton = styled(Button)`
  & {
    display: none;
  }

  @media (min-width: 1024px) {
    & {
      display: inline-flex;
    }
  }
`;

const SearchField = styled.label`
  & {
    position: relative;
    width: 100%;
    max-width: 32rem;
  }
`;

const SearchIcon = styled(Search)`
  & {
    position: absolute;
    top: 50%;
    left: 0.875rem;
    transform: translateY(-50%);
    pointer-events: none;
    color: #94a3b8;
  }
`;

const SearchInput = styled.input`
  ${fieldControlStyles}
  & {
    padding-left: 2.6rem;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
  }
`;

const Actions = styled.div`
  & {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

const ProfileLink = styled(Link)`
  & {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--app-border);
    border-radius: 1rem;
    background: #ffffff;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
    text-decoration: none;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  &:hover {
    border-color: var(--app-accent);
    transform: translateY(-1px);
  }
`;

const Avatar = styled.div`
  & {
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background: #fef3c7;
  }
`;

const ProfileMeta = styled.div`
  & {
    text-align: left;
  }

  @media (max-width: 639px) {
    & {
      display: none;
    }
  }
`;

const ProfileName = styled.p`
  & {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 500;
    color: #0f172a;
  }
`;

const ProfileRole = styled.p`
  & {
    margin: 0;
    font-size: 0.75rem;
    color: #64748b;
  }
`;

function Header({ onToggleSidebar, isSidebarCollapsed }) {
  return (
    <HeaderShell>
      <HeaderInner>
        <SidebarToggleButton
          aria-label={isSidebarCollapsed ? "Expandir menu" : "Recolher menu"}
          onClick={onToggleSidebar}
          size="icon"
          type="button"
          variant="secondary"
        >
          <Menu size={16} />
        </SidebarToggleButton>
        <SearchField>
          <SearchIcon size={16} />
          <SearchInput placeholder="Buscar por animais, doacoes, tarefas..." />
        </SearchField>

        <Actions>
          <Button size="icon" variant="secondary">
            <Bell size={16} />
          </Button>
          <ButtonLink
            aria-label="Abrir configuracoes"
            size="icon"
            to="/settings"
            variant="secondary"
          >
            <Settings size={16} />
          </ButtonLink>
          <ProfileLink to="/profile">
            <Avatar />
            <ProfileMeta>
              <ProfileName>Admin</ProfileName>
              <ProfileRole>Administrador</ProfileRole>
            </ProfileMeta>
          </ProfileLink>
        </Actions>
      </HeaderInner>
    </HeaderShell>
  );
}

export default Header;
