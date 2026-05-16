import { NavLink } from "react-router-dom";
import { LayoutDashboard, PawPrint, Package, DollarSign, Users, UserCircle, Settings } from "lucide-react";
import styled from "../../styles/styled";

const navigationItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/animals", label: "Animais", icon: PawPrint },
  { to: "/inventory", label: "Estoque", icon: Package },
  { to: "/finance", label: "Financeiro", icon: DollarSign },
  { to: "/admin", label: "Administracao", icon: Users },
  { to: "/profile", label: "Perfil", icon: UserCircle },
  { to: "/settings", label: "Configuracoes", icon: Settings }
];

const SidebarShell = styled.aside`
  & {
    position: sticky;
    top: 0;
    display: flex;
    height: 100vh;
    width: ${({ $isCollapsed }) => ($isCollapsed ? "5rem" : "16rem")};
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid var(--app-border);
    background: rgba(255, 255, 255, 0.95);
    padding: 1.25rem;
    transition: width 0.2s ease;
  }
`;

const Content = styled.div`
  & {
    display: flex;
    flex-direction: column;
  }
`;

const Brand = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: ${({ $isCollapsed }) => ($isCollapsed ? "center" : "flex-start")};
    gap: ${({ $isCollapsed }) => ($isCollapsed ? "0" : "0.75rem")};
  }
`;

const BrandMark = styled.div`
  & {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1rem;
    background: #fef3c7;
    flex-shrink: 0;
  }
`;

const BrandTitle = styled.h1`
  & {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const BrandSubtitle = styled.p`
  & {
    margin: 0.2rem 0 0;
    font-size: 0.75rem;
    color: #64748b;
  }
`;

const Navigation = styled.nav`
  & {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
  }
`;

const NavigationLink = styled(NavLink)`
  & {
    display: flex;
    align-items: center;
    justify-content: ${({ $isCollapsed }) => ($isCollapsed ? "center" : "flex-start")};
    gap: 0.75rem;
    border-radius: 0.875rem;
    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #475569;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  &:hover {
    background: #f1f5f9;
  }

  &.is-active {
    background: rgba(251, 191, 36, 0.2);
    color: #b45309;
  }
`;

const FooterCard = styled.div`
  & {
    border: 1px solid var(--app-border);
    border-radius: 1rem;
    background: #ffffff;
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
  }
`;

const FooterName = styled.p`
  & {
    margin: 0;
    font-weight: 600;
  }
`;

const FooterMeta = styled.p`
  & {
    margin: 0.25rem 0 0;
    color: #94a3b8;
  }
`;

function Sidebar({ isCollapsed }) {
  return (
    <SidebarShell $isCollapsed={isCollapsed}>
      <Content>
        <Brand $isCollapsed={isCollapsed}>
          <BrandMark />
          {!isCollapsed && (
            <div>
              <BrandTitle>Patudos System</BrandTitle>
              <BrandSubtitle>Operacao & resgates</BrandSubtitle>
            </div>
          )}
        </Brand>

        <Navigation>
          {navigationItems.map(({ to, label, icon: Icon }) => (
            <NavigationLink
              key={to}
              $isCollapsed={isCollapsed}
              className={({ isActive }) => (isActive ? "is-active" : "")}
              to={to}
            >
              <Icon size={20} />
              {!isCollapsed && <span>{label}</span>}
            </NavigationLink>
          ))}
        </Navigation>
      </Content>

      {!isCollapsed && (
        <FooterCard>
          <FooterName>Admin</FooterName>
          <FooterMeta>Equipe Central</FooterMeta>
        </FooterCard>
      )}
    </SidebarShell>
  );
}

export default Sidebar;
