import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "../../styles/styled";

const Shell = styled.div`
  & {
    min-height: 100vh;
  }
`;

const Layout = styled.div`
  & {
    display: flex;
    min-height: 100vh;
  }
`;

const Content = styled.div`
  & {
    display: flex;
    min-height: 100vh;
    flex: 1;
    flex-direction: column;
  }
`;

const Main = styled.main`
  & {
    flex: 1;
    padding: 1.5rem 1.5rem 2.5rem;
  }

  @media (min-width: 640px) {
    & {
      padding-inline: 2rem;
    }
  }
`;

const MainInner = styled.div`
  & {
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
  }
`;

function PageContainer({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <Shell className="app-shell">
      <Layout>
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <Content>
          <Header
            onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <Main>
            <MainInner>{children}</MainInner>
          </Main>
        </Content>
      </Layout>
    </Shell>
  );
}

export default PageContainer;
