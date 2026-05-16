import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function Settings() {
  return (
    <PageContainer>
      <div>
        <h1 className="text-3xl font-semibold">Configuracoes</h1>
        <p className="mt-1 text-sm text-slate-500">Ajustes gerais do sistema e notificacoes.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Preferencias do sistema</h2>
          <p className="mt-1 text-sm text-slate-500">Controle de temas e experiencia.</p>
          <div className="mt-6 space-y-4 text-sm">
            <label className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--app-border)] bg-white px-4 py-3">
              <div>
                <p className="font-medium">Modo compacto</p>
                <p className="text-slate-500">Reduz espacos para listas grandes.</p>
              </div>
              <input type="checkbox" className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--app-border)] bg-white px-4 py-3">
              <div>
                <p className="font-medium">Alertas sonoros</p>
                <p className="text-slate-500">Notificacoes criticas com audio.</p>
              </div>
              <input type="checkbox" className="h-4 w-4" defaultChecked />
            </label>
            <label className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--app-border)] bg-white px-4 py-3">
              <div>
                <p className="font-medium">Resumo semanal</p>
                <p className="text-slate-500">Receba relatorio por email.</p>
              </div>
              <input type="checkbox" className="h-4 w-4" />
            </label>
          </div>
          <div className="mt-6 flex justify-end">
            <Button>Salvar configuracoes</Button>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Notificacoes</h2>
          <p className="mt-1 text-sm text-slate-500">Defina o que receber em tempo real.</p>
          <div className="mt-6 space-y-4 text-sm">
            <label className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--app-border)] bg-white px-4 py-3">
              <div>
                <p className="font-medium">Resgates urgentes</p>
                <p className="text-slate-500">Aviso imediato por push.</p>
              </div>
              <input type="checkbox" className="h-4 w-4" defaultChecked />
            </label>
            <label className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--app-border)] bg-white px-4 py-3">
              <div>
                <p className="font-medium">Limite de estoque</p>
                <p className="text-slate-500">Alertas de racao baixa.</p>
              </div>
              <input type="checkbox" className="h-4 w-4" defaultChecked />
            </label>
            <label className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--app-border)] bg-white px-4 py-3">
              <div>
                <p className="font-medium">Movimentacoes financeiras</p>
                <p className="text-slate-500">Notificacoes de entradas e saidas.</p>
              </div>
              <input type="checkbox" className="h-4 w-4" />
            </label>
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="secondary">Atualizar notificacoes</Button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}

export default Settings;
