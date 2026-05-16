import ButtonLink from "../ui/ButtonLink";
import Card from "../ui/Card";
import { PawPrint, Package, DollarSign, Users, UserCircle, Settings } from "lucide-react";
import styled from "../../styles/styled";

const QuickActionsCard = styled(Card)`
  & {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Header = styled.div`
  & {
    display: flex;
    align-items: center;
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

const Caption = styled.span`
  & {
    font-size: 0.75rem;
    color: #64748b;
  }
`;

const ActionGrid = styled.div`
  & {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.75rem;
  }

  @media (min-width: 640px) {
    & {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

function QuickActions() {
  const actions = [
    { label: "Animais", to: "/animals", icon: PawPrint },
    { label: "Estoque", to: "/inventory", icon: Package },
    { label: "Financeiro", to: "/finance", icon: DollarSign },
    { label: "Usuarios", to: "/admin", icon: Users },
    { label: "Perfil", to: "/profile", icon: UserCircle },
    { label: "Configuracoes", to: "/settings", icon: Settings }
  ];

  return (
    <QuickActionsCard>
      <Header>
        <Title>Atalhos Rapidos</Title>
        <Caption>Acesso imediato</Caption>
      </Header>
      <ActionGrid>
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <ButtonLink key={action.label} justify="start" to={action.to} variant="secondary">
              <Icon size={16} />
              {action.label}
            </ButtonLink>
          );
        })}
      </ActionGrid>
    </QuickActionsCard>
  );
}

export default QuickActions;
