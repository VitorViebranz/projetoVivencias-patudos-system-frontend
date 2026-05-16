import styled from "../../styles/styled";

const TabsWrapper = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const TabButton = styled.button`
  & {
    border-radius: 999px;
    border: 1px solid ${({ $active }) => ($active ? "transparent" : "var(--app-border)")};
    background: ${({ $active }) => ($active ? "#020617" : "#ffffff")};
    color: ${({ $active }) => ($active ? "#ffffff" : "#475569")};
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.4rem 1rem;
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  &:hover {
    background: ${({ $active }) => ($active ? "#020617" : "#f8fafc")};
    border-color: ${({ $active }) => ($active ? "transparent" : "#d6cfc2")};
  }
`;

function FilterTabs({ tabs, activeTab, onChange = () => {} }) {
  return (
    <TabsWrapper>
      {tabs.map((tab) => (
        <TabButton
          key={tab.key}
          $active={activeTab === tab.key}
          onClick={() => onChange(tab.key)}
          type="button"
        >
          {tab.label}
        </TabButton>
      ))}
    </TabsWrapper>
  );
}

export default FilterTabs;
