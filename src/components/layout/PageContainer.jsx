import Sidebar from "./Sidebar";
import Header from "./Header";

function PageContainer({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Header />''
        {children}
      </div>
    </div>
  );
}

export default PageContainer;