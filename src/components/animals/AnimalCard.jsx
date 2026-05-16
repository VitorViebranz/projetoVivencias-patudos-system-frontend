import { Mars, Venus, ShieldCheck, ShieldX } from "lucide-react";
import AnimalImage from "./AnimalImage";
import Card from "../ui/Card";
import styled from "../../styles/styled";

const AGE_STYLES = {
  Filhote: { background: "#ede9fe", color: "#6d28d9" },
  Adulto: { background: "#e0e7ff", color: "#4338ca" },
  Idoso: { background: "#e2e8f0", color: "#475569" }
};

const TEMPERAMENT_STYLES = {
  "Dócil": { background: "#dcfce7", color: "#15803d" },
  Calmo: { background: "#e0f2fe", color: "#0369a1" },
  Normal: { background: "#fef3c7", color: "#b45309" },
  Agressivo: { background: "#ffe4e6", color: "#be123c" }
};

const STATUS_STYLES = {
  "Saudável": { background: "#dcfce7", color: "#166534" },
  Exame: { background: "#ffedd5", color: "#c2410c" },
  Cirurgia: { background: "#f3e8ff", color: "#7e22ce" },
  Adotado: { background: "#e2e8f0", color: "#475569" }
};

const AnimalCardRoot = styled(Card)`
  & {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(15, 23, 42, 0.1);
  }
`;

const ImageSlot = styled.div`
  & {
    width: 8rem;
    height: 8rem;
    flex-shrink: 0;
  }
`;

const Content = styled.div`
  & {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
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

const Name = styled.h2`
  & {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.1;
  }
`;

const Breed = styled.p`
  & {
    margin: 0.35rem 0 0;
    font-size: 0.875rem;
    color: var(--app-muted);
  }
`;

const StatusBadge = styled.span`
  & {
    border-radius: 0.75rem;
    padding: 0.35rem 0.6rem;
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: ${({ $background }) => $background};
    color: ${({ $color }) => $color};
  }
`;

const Badges = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }
`;

const Badge = styled.span`
  & {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border-radius: 0.75rem;
    padding: 0.35rem 0.6rem;
    font-size: 0.75rem;
    background: ${({ $background }) => $background};
    color: ${({ $color }) => $color};
  }
`;

const getAgeLabel = (age) => {
  if (age == null || age === "") {
    return null;
  }

  if (age < 1) {
    return "Filhote";
  }

  if (age < 7) {
    return "Adulto";
  }

  return "Idoso";
};

function AnimalCard({ name, breed, gender, temperament, dewormed, status, age, image }) {
  const ageLabel = getAgeLabel(age);
  const ageStyle = AGE_STYLES[ageLabel];
  const isMale = gender === "Macho";
  const isDewormed = dewormed === "Vermifugado";
  const genderStyle = isMale
    ? { background: "#dbeafe", color: "#2563eb" }
    : { background: "#fce7f3", color: "#db2777" };
  const dewormingStyle = isDewormed
    ? { background: "#dcfce7", color: "#15803d" }
    : { background: "#ffe4e6", color: "#be123c" };
  const statusStyle = STATUS_STYLES[status] || { background: "#e2e8f0", color: "#475569" };
  const temperamentStyle = TEMPERAMENT_STYLES[temperament] || { background: "#e2e8f0", color: "#475569" };

  return (
    <AnimalCardRoot>
      <ImageSlot>
        <AnimalImage src={image} alt={name} />
      </ImageSlot>

      <Content>
        <Header>
          <div>
            <Name>{name}</Name>
            <Breed>{breed}</Breed>
          </div>
          <StatusBadge $background={statusStyle.background} $color={statusStyle.color}>
            {status}
          </StatusBadge>
        </Header>

        <Badges>
          {ageLabel && (
            <Badge $background={ageStyle.background} $color={ageStyle.color}>
              {ageLabel} ({age} {age === 1 ? "ano" : "anos"})
            </Badge>
          )}

          <Badge $background={genderStyle.background} $color={genderStyle.color}>
            {isMale ? <Mars size={14} /> : <Venus size={14} />}
            {gender}
          </Badge>

          <Badge $background={temperamentStyle.background} $color={temperamentStyle.color}>
            {temperament}
          </Badge>

          <Badge $background={dewormingStyle.background} $color={dewormingStyle.color}>
            {isDewormed ? <ShieldCheck size={14} /> : <ShieldX size={14} />}
            {isDewormed ? "Vermifugado" : "Nao vermifugado"}
          </Badge>
        </Badges>
      </Content>
    </AnimalCardRoot>
  );
}

export default AnimalCard;
