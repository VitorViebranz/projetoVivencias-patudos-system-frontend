import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import StatCard from "../components/dashboard/StatCard";
import FinanceChartFilter from "../components/finance/FinanceChartFilter";
import FinanceLineChart from "../components/finance/FinanceLineChart";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Modal from "../components/ui/Modal";
import { DollarSign, TrendingUp, TrendingDown, Plus } from "lucide-react";

function Finance() {
  const [selectedRange, setSelectedRange] = useState("trimestre");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [formData, setFormData] = useState({ type: "", amount: "", date: "", description: "" });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    console.log("Nova transacao:", formData);
    setIsCreateOpen(false);
  };

  const yearOptions = ["2024", "2025", "2026"];

  // Dados de exemplo para o gráfico por ano
  const chartDataOptions = {
    2024: {
      trimestre: [
        { month: "Jan", value: 12000 },
        { month: "Fev", value: 15000 },
        { month: "Mar", value: 18000 }
      ],
      semestre: [
        { month: "Jan", value: 12000 },
        { month: "Fev", value: 15000 },
        { month: "Mar", value: 18000 },
        { month: "Abr", value: 14000 },
        { month: "Mai", value: 20000 },
        { month: "Jun", value: 22000 }
      ],
      anual: [
        { month: "Jan", value: 12000 },
        { month: "Fev", value: 15000 },
        { month: "Mar", value: 18000 },
        { month: "Abr", value: 14000 },
        { month: "Mai", value: 20000 },
        { month: "Jun", value: 22000 },
        { month: "Jul", value: 19000 },
        { month: "Ago", value: 21000 },
        { month: "Set", value: 23000 },
        { month: "Out", value: 24000 },
        { month: "Nov", value: 25000 },
        { month: "Dez", value: 26000 }
      ]
    },
    2025: {
      trimestre: [
        { month: "Jan", value: 13000 },
        { month: "Fev", value: 16000 },
        { month: "Mar", value: 17000 }
      ],
      semestre: [
        { month: "Jan", value: 13000 },
        { month: "Fev", value: 16000 },
        { month: "Mar", value: 17000 },
        { month: "Abr", value: 15000 },
        { month: "Mai", value: 21000 },
        { month: "Jun", value: 23000 }
      ],
      anual: [
        { month: "Jan", value: 13000 },
        { month: "Fev", value: 16000 },
        { month: "Mar", value: 17000 },
        { month: "Abr", value: 15000 },
        { month: "Mai", value: 21000 },
        { month: "Jun", value: 23000 },
        { month: "Jul", value: 20000 },
        { month: "Ago", value: 22000 },
        { month: "Set", value: 24000 },
        { month: "Out", value: 25000 },
        { month: "Nov", value: 26000 },
        { month: "Dez", value: 27000 }
      ]
    },
    2026: {
      trimestre: [
        { month: "Jan", value: 14000 },
        { month: "Fev", value: 17000 },
        { month: "Mar", value: 19000 }
      ],
      semestre: [
        { month: "Jan", value: 14000 },
        { month: "Fev", value: 17000 },
        { month: "Mar", value: 19000 },
        { month: "Abr", value: 16000 },
        { month: "Mai", value: 22000 },
        { month: "Jun", value: 24000 }
      ],
      anual: [
        { month: "Jan", value: 14000 },
        { month: "Fev", value: 17000 },
        { month: "Mar", value: 19000 },
        { month: "Abr", value: 16000 },
        { month: "Mai", value: 22000 },
        { month: "Jun", value: 24000 },
        { month: "Jul", value: 21000 },
        { month: "Ago", value: 23000 },
        { month: "Set", value: 25000 },
        { month: "Out", value: 26000 },
        { month: "Nov", value: 27000 },
        { month: "Dez", value: 28000 }
      ]
    }
  };

  const chartData = chartDataOptions[selectedYear]?.[selectedRange] || [];

  return (
    <PageContainer>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Financeiro</h1>
          <p className="mt-1 text-sm text-slate-500">Acompanhe entradas, saidas e fluxo de caixa.</p>
        </div>
        <Button onClick={() => setIsCreateOpen(true)}>
          <Plus className="h-4 w-4" />
          Adicionar Financa
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard title="Entradas" value="R$ 45.200,00" subtitle="+15%" icon={TrendingUp} color="green" />
        <StatCard title="Saidas" value="R$ 32.800,00" subtitle="+8%" icon={TrendingDown} color="red" />
        <StatCard title="Lucro" value="R$ 12.400,00" subtitle="+22%" icon={DollarSign} color="blue" />
      </div>

      <div className="mt-6">
        <FinanceChartFilter
          selectedRange={selectedRange}
          onRangeChange={setSelectedRange}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          years={yearOptions}
        />
        <FinanceLineChart data={chartData} />
      </div>

      <div className="surface-card mt-6 rounded-3xl p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transacoes Recentes</h2>
          <span className="text-xs text-slate-500">Hoje</span>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
            <span>Doacao - Joao Silva</span>
            <span className="font-medium text-emerald-600">+R$ 500,00</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
            <span>Compra de racao</span>
            <span className="font-medium text-rose-600">-R$ 1.200,00</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
            <span>Taxa de adocao - Luna</span>
            <span className="font-medium text-emerald-600">+R$ 300,00</span>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Nova transacao"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsCreateOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" form="finance-create-form">Salvar</Button>
          </>
        }
      >
        <form id="finance-create-form" onSubmit={handleCreateSubmit} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Select
              label="Tipo"
              name="type"
              value={formData.type}
              onChange={handleFormChange}
              required
            >
              <option value="">Selecione</option>
              <option value="income">Receita</option>
              <option value="expense">Despesa</option>
            </Select>
          </div>
          <Input
            label="Valor (R$)"
            name="amount"
            type="number"
            step="0.01"
            value={formData.amount}
            onChange={handleFormChange}
            placeholder="0,00"
            required
          />
          <Input
            label="Data"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleFormChange}
            required
          />
          <div className="sm:col-span-2">
            <Input
              label="Descricao"
              name="description"
              value={formData.description}
              onChange={handleFormChange}
              placeholder="Descreva a transacao"
              required
            />
          </div>
        </form>
      </Modal>
    </PageContainer>
  );
}

export default Finance;
