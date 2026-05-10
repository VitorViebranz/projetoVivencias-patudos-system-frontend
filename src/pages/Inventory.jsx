import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import DataTable from "../components/ui/DataTable";
import FilterTabs from "../components/animals/FilterTabs";
import InventoryStatCard from "../components/inventory/InventoryStatCard";
import { Plus, Package, Heart, TrendingUp, Boxes, Eye, PenLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function Inventory() {
  const feedItems = [
    { id: 1, name: "Ração para Cães Adultos", quantity: 50, unit: "kg", supplier: "Fornecedor A", expiration: "2025-12-01" },
    { id: 2, name: "Ração para Gatos", quantity: 30, unit: "kg", supplier: "Fornecedor B", expiration: "2025-11-15" },
    { id: 2, name: "Ração para Gatos", quantity: 30, unit: "kg", supplier: "Fornecedor B", expiration: "2025-11-15" },
    { id: 2, name: "Ração para Gatos", quantity: 30, unit: "kg", supplier: "Fornecedor B", expiration: "2025-11-15" },
    { id: 3, name: "Ração para Filhotes", quantity: 20, unit: "kg", supplier: "Fornecedor C", expiration: "2025-10-20" },
    { id: 3, name: "Ração para Filhotes", quantity: 20, unit: "kg", supplier: "Fornecedor C", expiration: "2025-10-20" },
    { id: 3, name: "Ração para Filhotes", quantity: 20, unit: "kg", supplier: "Fornecedor C", expiration: "2025-10-20" },
    { id: 3, name: "Ração para Filhotes", quantity: 20, unit: "kg", supplier: "Fornecedor C", expiration: "2025-10-20" },
  ];

  const donationItems = [
    { id: 1, name: "Cobertores", quantity: 15, unit: "unidades", donor: "João Silva", date: "2024-05-01" },
    { id: 2, name: "Produtos de Limpeza", quantity: 10, unit: "kits", donor: "Maria Santos", date: "2024-04-28" },
    { id: 2, name: "Produtos de Limpeza", quantity: 10, unit: "kits", donor: "Maria Santos", date: "2024-04-28" },
    { id: 2, name: "Produtos de Limpeza", quantity: 10, unit: "kits", donor: "Maria Santos", date: "2024-04-28" },
    { id: 3, name: "Brinquedos", quantity: 25, unit: "unidades", donor: "Empresa XYZ", date: "2024-04-25" },
    { id: 3, name: "Brinquedos", quantity: 25, unit: "unidades", donor: "Empresa XYZ", date: "2024-04-25" },
    { id: 3, name: "Brinquedos", quantity: 25, unit: "unidades", donor: "Empresa XYZ", date: "2024-04-25" },
    { id: 3, name: "Brinquedos", quantity: 25, unit: "unidades", donor: "Empresa XYZ", date: "2024-04-25" },
  ];

  // Calcular soma de kg das rações
  const totalFeedKg = feedItems
    .filter(item => item.unit === "kg")
    .reduce((sum, item) => sum + item.quantity, 0);

  const feedColumns = [
    { key: 'name', label: 'Nome' },
    { key: 'quantity', label: 'Quantidade' },
    { key: 'supplier', label: 'Fornecedor' },
    { key: 'expiration', label: 'Validade' },
  ];

  const donationColumns = [
    { key: 'name', label: 'Nome' },
    { key: 'quantity', label: 'Quantidade' },
    { key: 'donor', label: 'Doador' },
    { key: 'date', label: 'Data' },
  ];

  const actions = (row) => (
    <div className="flex space-x-4">
      <button className="text-blue-500 hover:text-blue-700 transition-colors" title="Editar">
        <PenLine className="w-4 h-4" />
      </button>
      <button className="text-red-500 hover:text-red-700 transition-colors" title="Remover">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );

  // Modificar dados para incluir unit na quantity
  const feedData = feedItems.map(item => ({
    ...item,
    quantity: `${item.quantity} ${item.unit}`
  }));

  const donationData = donationItems.map(item => ({
    ...item,
    quantity: `${item.quantity} ${item.unit}`
  }));

  return (
    <PageContainer>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Estoque</h1>
        <Link to="/inventory/add" className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-500 transition-colors inline-flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Novo Item
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <InventoryStatCard title="Total de Itens" value="100" subtitle="+5%" icon={Package} color="blue" />
        <InventoryStatCard title="Doações Recebidas" value="50" subtitle="+12%" icon={Heart} color="green" />
        <InventoryStatCard title="Itens Baixos" value="8" subtitle="Atenção" icon={TrendingUp} color="red" />
        <InventoryStatCard title="Total de Ração" value={`${totalFeedKg}kg`} icon={Boxes} color="yellow" />
      </div>

      <FilterTabs />

      {/* Seção de Ração */}
      <Card className="mb-6">
        <div className="flex items-center mb-4">
          <Package className="w-5 h-5 text-yellow-500 mr-2" />
          <h2 className="text-xl font-semibold">Ração</h2>
        </div>
        <DataTable columns={feedColumns} data={feedData} actions={actions} />
      </Card>

      {/* Seção de Insumos e Doações */}
      <Card>
        <div className="flex items-center mb-4">
          <Heart className="w-5 h-5 text-red-500 mr-2" />
          <h2 className="text-xl font-semibold">Insumos e Doações Físicas</h2>
        </div>
        <DataTable columns={donationColumns} data={donationData} actions={actions} />
      </Card>
    </PageContainer>
  );
}

export default Inventory;