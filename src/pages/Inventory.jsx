import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Modal from "../components/ui/Modal";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import DataTable from "../components/ui/DataTable";
import FilterTabs from "../components/animals/FilterTabs";
import StatCard from "../components/dashboard/StatCard";
import IconButton from "../components/ui/IconButton";
import { Plus, Package, Heart, TrendingUp, Boxes, Eye, Trash2 } from "lucide-react";

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
  ].map((item, index) => ({ ...item, id: index + 1 }));

  const donationItems = [
    { id: 1, name: "Cobertores", quantity: 15, unit: "unidades", donor: "João Silva", date: "2024-05-01" },
    { id: 2, name: "Produtos de Limpeza", quantity: 10, unit: "kits", donor: "Maria Santos", date: "2024-04-28" },
    { id: 2, name: "Produtos de Limpeza", quantity: 10, unit: "kits", donor: "Maria Santos", date: "2024-04-28" },
    { id: 2, name: "Produtos de Limpeza", quantity: 10, unit: "kits", donor: "Maria Santos", date: "2024-04-28" },
    { id: 3, name: "Brinquedos", quantity: 25, unit: "unidades", donor: "Empresa XYZ", date: "2024-04-25" },
    { id: 3, name: "Brinquedos", quantity: 25, unit: "unidades", donor: "Empresa XYZ", date: "2024-04-25" },
    { id: 3, name: "Brinquedos", quantity: 25, unit: "unidades", donor: "Empresa XYZ", date: "2024-04-25" },
    { id: 3, name: "Brinquedos", quantity: 25, unit: "unidades", donor: "Empresa XYZ", date: "2024-04-25" },
  ].map((item, index) => ({ ...item, id: index + 1 }));

  // Calcular soma de kg das rações
  const totalFeedKg = feedItems
    .filter(item => item.unit === "kg")
    .reduce((sum, item) => sum + item.quantity, 0);

  const [activeTab, setActiveTab] = useState("feed");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    quantity: "",
    unit: "",
    supplier: "",
    donor: "",
    expiration: "",
    date: ""
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    console.log("Novo item:", formData);
    setIsCreateOpen(false);
  };

  const handleView = (item) => {
    setSelectedItem(item);
    setIsViewOpen(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const isFeed = formData.type === "feed";
  const isDonation = formData.type === "donation";

  const tabs = [
    { key: "feed", label: "Racao" },
    { key: "donations", label: "Doacoes" },
    { key: "alerts", label: "Alertas" }
  ];

  const feedColumns = [
    { key: "name", label: "Nome" },
    { key: "quantity", label: "Quantidade" },
    { key: "supplier", label: "Fornecedor" },
    { key: "expiration", label: "Validade" }
  ];

  const donationColumns = [
    { key: "name", label: "Nome" },
    { key: "quantity", label: "Quantidade" },
    { key: "donor", label: "Doador" },
    { key: "date", label: "Data" }
  ];

  const actions = (row) => (
    <div className="flex items-center gap-2">
      <IconButton aria-label={`Ver ${row.name}`} title="Ver" onClick={() => handleView(row)}>
        <Eye size={16} />
      </IconButton>
      <IconButton aria-label={`Remover ${row.name}`} title="Remover" onClick={() => handleDelete(row)} tone="danger">
        <Trash2 size={16} />
      </IconButton>
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
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Estoque</h1>
          <p className="mt-1 text-sm text-slate-500">Controle de insumos, racoes e doacoes fisicas.</p>
        </div>
        <Button onClick={() => setIsCreateOpen(true)}>
          <Plus className="h-4 w-4" />
          Novo Item
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatCard title="Total de Itens" value="100" subtitle="+5%" icon={Package} color="blue" />
        <StatCard title="Doacoes Recebidas" value="50" subtitle="+12%" icon={Heart} color="green" />
        <StatCard title="Itens Baixos" value="8" subtitle="Atencao" icon={TrendingUp} color="red" />
        <StatCard title="Total de Racao" value={`${totalFeedKg}kg`} icon={Boxes} color="yellow" />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <FilterTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <p className="text-sm text-slate-500">Atualizado ha 5 minutos</p>
      </div>

      <Card className="mt-4">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
            <Package className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Racao</h2>
            <p className="text-sm text-slate-500">Lotes e validade do estoque de racao.</p>
          </div>
        </div>
        <div className="mt-4">
          <DataTable
            columns={feedColumns}
            data={feedData}
            actions={actions}
            emptyMessage="Sem dados de racao."
            tableClassName="max-h-80 overflow-y-auto custom-scrollbar"
          />
        </div>
      </Card>

      <Card className="mt-6">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-rose-100 p-2 text-rose-700">
            <Heart className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Insumos e Doacoes Fisicas</h2>
            <p className="text-sm text-slate-500">Itens doados e consumiveis gerais.</p>
          </div>
        </div>
        <div className="mt-4">
          <DataTable
            columns={donationColumns}
            data={donationData}
            actions={actions}
            emptyMessage="Sem doacoes cadastradas."
            tableClassName="max-h-80 overflow-y-auto custom-scrollbar"
          />
        </div>
      </Card>

      <Modal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Novo item"
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsCreateOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" form="inventory-create-form">Salvar</Button>
          </>
        }
      >
        <form id="inventory-create-form" onSubmit={handleCreateSubmit} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Select
              label="Tipo de item"
              name="type"
              value={formData.type}
              onChange={handleFormChange}
              required
            >
              <option value="">Selecione o tipo</option>
              <option value="feed">Racao</option>
              <option value="donation">Doacao / Insumo</option>
            </Select>
          </div>
          <Input
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Digite o nome do item"
            required
          />
          <Input
            label="Quantidade"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleFormChange}
            placeholder="Digite a quantidade"
            required
          />
          <Input
            label="Unidade"
            name="unit"
            value={formData.unit}
            onChange={handleFormChange}
            placeholder="Ex: kg, unidades"
            required
          />
          {isFeed && (
            <>
              <Input
                label="Fornecedor"
                name="supplier"
                value={formData.supplier}
                onChange={handleFormChange}
                placeholder="Digite o fornecedor"
                required
              />
              <Input
                label="Validade"
                name="expiration"
                type="date"
                value={formData.expiration}
                onChange={handleFormChange}
                required
              />
            </>
          )}
          {isDonation && (
            <>
              <Input
                label="Doador"
                name="donor"
                value={formData.donor}
                onChange={handleFormChange}
                placeholder="Digite o nome do doador"
                required
              />
              <Input
                label="Data da doacao"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleFormChange}
                required
              />
            </>
          )}
        </form>
      </Modal>

      <Modal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        title="Detalhes do item"
        size="sm"
      >
        {selectedItem && (
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-slate-500">Nome</p>
              <p className="font-medium">{selectedItem.name}</p>
            </div>
            <div>
              <p className="text-slate-500">Quantidade</p>
              <p className="font-medium">{selectedItem.quantity}</p>
            </div>
            {selectedItem.supplier && (
              <div>
                <p className="text-slate-500">Fornecedor</p>
                <p className="font-medium">{selectedItem.supplier}</p>
              </div>
            )}
            {selectedItem.donor && (
              <div>
                <p className="text-slate-500">Doador</p>
                <p className="font-medium">{selectedItem.donor}</p>
              </div>
            )}
            {selectedItem.expiration && (
              <div>
                <p className="text-slate-500">Validade</p>
                <p className="font-medium">{selectedItem.expiration}</p>
              </div>
            )}
            {selectedItem.date && (
              <div>
                <p className="text-slate-500">Data</p>
                <p className="font-medium">{selectedItem.date}</p>
              </div>
            )}
          </div>
        )}
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteOpen}
        title="Excluir item"
        message={`Tem certeza que deseja excluir ${selectedItem?.name || "este item"}?`}
        confirmLabel="Excluir"
        onConfirm={() => setIsDeleteOpen(false)}
        onCancel={() => setIsDeleteOpen(false)}
      />
    </PageContainer>
  );
}

export default Inventory;
