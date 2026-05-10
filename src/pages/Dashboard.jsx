import PageContainer from "../components/layout/PageContainer";
import StatCard from "../components/dashboard/StatCard";
import ActivityItem from "../components/dashboard/ActivityItem";
import { PawPrint,  HeartPlus, Package, DollarSign } from "lucide-react";

function Dashboard() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-2">Olá, 'admin (usar JS)'</h1>

      <div className="grid grid-cols-4 gap-4 my-6">
        <StatCard title="Total de Animais" value="142" subtitle="+4" icon={PawPrint} color="blue"/>
        <StatCard title="Adoções" value="28" subtitle="+12%"  icon={HeartPlus} color="green" />
        <StatCard title="Estoque de Ração" value="840kg" icon={Package} color="yellow" />
        <StatCard title="Caixa" value="R$ 12.400,00" icon={DollarSign} color="purple"/>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Atividade Recente</h2>

      <div className="bg-white rounded-xl p-4">
        <ActivityItem title="Nova adoção: Bento" time="2h atrás" />
        <ActivityItem title="Compra de Ração" time="5h atrás" />
        <ActivityItem title="Novo Patudo: Luna" time="1d atrás" />
      </div>
    </PageContainer>
  );
}

export default Dashboard;