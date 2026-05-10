import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import StatCard from "../components/dashboard/StatCard";
import FinanceChartFilter from "../components/finance/FinanceChartFilter";
import FinanceLineChart from "../components/finance/FinanceLineChart";
import Button from "../components/ui/Button";
import { DollarSign, TrendingUp, TrendingDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function Finance() {
  const [selectedRange, setSelectedRange] = useState("trimestre");
  const [selectedYear, setSelectedYear] = useState("2024");

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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Financeiro</h1>
        <Link to="/finance/add" className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-500 transition-colors inline-flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Finança
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <StatCard title="Entradas" value="R$ 45.200,00" subtitle="+15%" icon={TrendingUp} color="green" />
        <StatCard title="Saídas" value="R$ 32.800,00" subtitle="+8%" icon={TrendingDown} color="red" />
        <StatCard title="Lucro" value="R$ 12.400,00" subtitle="+22%" icon={DollarSign} color="blue" />
      </div>

      <div className="mb-6">
        <FinanceChartFilter
          selectedRange={selectedRange}
          onRangeChange={setSelectedRange}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          years={yearOptions}
        />
        <FinanceLineChart data={chartData} />
      </div>

      <div className="bg-white rounded-2xl p-4 border border-amber-400">
        <h2 className="text-xl font-semibold mb-4">Transações Recentes</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b">
            <span>Doação - João Silva</span>
            <span className="text-green-600">+R$ 500,00</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span>Compra de Ração</span>
            <span className="text-red-600">-R$ 1.200,00</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span>Adoption Fee - Luna</span>
            <span className="text-green-600">+R$ 300,00</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Finance;