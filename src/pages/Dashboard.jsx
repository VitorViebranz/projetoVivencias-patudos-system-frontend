import PageContainer from "../components/layout/PageContainer";
import StatCard from "../components/dashboard/StatCard";
import ActivityItem from "../components/dashboard/ActivityItem";
import QuickActions from "../components/dashboard/QuickActions";
import { PawPrint,  HeartPlus, Package, DollarSign } from "lucide-react";

function Dashboard() {
  return (
    <PageContainer>
      <div>
        <h1 className="text-3xl font-semibold">Ola, Admin</h1>
        <p className="mt-1 text-sm text-slate-500">Resumo operacional do abrigo para esta semana.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total de Animais" value="142" subtitle="+4" icon={PawPrint} color="blue" />
        <StatCard title="Adocoes" value="28" subtitle="+12%" icon={HeartPlus} color="green" />
        <StatCard title="Estoque de Racao" value="840kg" icon={Package} color="yellow" />
        <StatCard title="Caixa" value="R$ 12.400,00" icon={DollarSign} color="purple" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="surface-card rounded-3xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Atividade Recente</h2>
            <span className="text-xs text-slate-500">Ultimos 7 dias</span>
          </div>
          <div className="mt-4">
            <ActivityItem title="Nova adocao: Bento" time="2h atras" />
            <ActivityItem title="Compra de racao" time="5h atras" />
            <ActivityItem title="Novo patudo: Luna" time="1d atras" />
          </div>
        </div>

        <div className="space-y-6">
          <QuickActions />
          <div className="surface-card rounded-3xl p-5">
            <h2 className="text-lg font-semibold">Alertas Prioritarios</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm">
                <p className="font-medium text-amber-800">Racao para caes adultos abaixo do minimo.</p>
                <p className="text-xs text-amber-700">Repor nos proximos 3 dias.</p>
              </div>
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-3 text-sm">
                <p className="font-medium text-sky-800">3 novos resgates agendados.</p>
                <p className="text-xs text-sky-700">Equipe veterinaria disponivel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Dashboard;