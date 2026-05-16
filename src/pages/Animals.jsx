import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import DataTable from "../components/ui/DataTable";
import FilterTabs from "../components/animals/FilterTabs";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Modal from "../components/ui/Modal";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import IconButton from "../components/ui/IconButton";
import { Plus, Eye, PenLine, Mars, Venus, ShieldCheck, ShieldX, Trash2 } from "lucide-react";

function Animals() {
  const animalData = [
    { name: "Bento", breed: "Golden Retriever Mix", gender: "Macho", temperament: "Calmo", dewormed: "Vermifugado", status: "Saudável", age: 10 },
    { name: "Luna", breed: "Russian Blue", gender: "Fêmea", temperament: "Dócil", dewormed: "Não vermifugado", status: "Exame", age: 2 },
    { name: "Pipo", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Adotado", age: 0 },
    { name: "Fred", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Adotado", age: 7 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Alex", breed: "Beagle Mix", gender: "Macho", temperament: "Agressivo", dewormed: "Não vermifugado", status: "Cirurgia", age: 5 },
    { name: "Luna", breed: "Russian Blue", gender: "Fêmea", temperament: "Dócil", dewormed: "Não vermifugado", status: "Exame", age: 2 },
  ].map((animal, index) => ({ id: index + 1, ...animal }));

  const [activeTab, setActiveTab] = useState("all");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    gender: "",
    temperament: "",
    dewormed: "",
    status: "",
    age: ""
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    console.log("Novo animal:", formData);
    setIsCreateOpen(false);
  };

  const handleView = (animal) => {
    setSelectedAnimal(animal);
    setIsViewOpen(true);
  };

  const handleDelete = (animal) => {
    setSelectedAnimal(animal);
    setIsDeleteOpen(true);
  };

  const tabs = [
    { key: "all", label: "Todos" },
    { key: "breed", label: "Racas" },
    { key: "male", label: "Machos" },
    { key: "female", label: "Femeas" }
  ];

  const columns = [
    { key: "name", label: "Nome" },
    { key: "breed", label: "Raca" },
    {
      key: "gender",
      label: "Genero",
      render: (value) => (
        <div className="flex items-center gap-2">
          {value === "Macho" ? <Mars className="h-4 w-4 text-sky-500" /> : <Venus className="h-4 w-4 text-rose-500" />}
          {value}
        </div>
      )
    },
    {
      key: "temperament",
      label: "Temperamento",
      render: (value) => {
        const temperamentColors = {
          "Dócil": "bg-emerald-100 text-emerald-700",
          "Calmo": "bg-sky-100 text-sky-700",
          "Normal": "bg-amber-100 text-amber-700",
          "Agressivo": "bg-rose-100 text-rose-700"
        };
        return (
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${temperamentColors[value] || "bg-slate-100 text-slate-700"}`}>
            {value}
          </span>
        );
      }
    },
    {
      key: "dewormed",
      label: "Vermifugado",
      render: (value) => (
        <div className="flex items-center gap-2">
          {value === "Vermifugado" ? <ShieldCheck className="h-4 w-4 text-emerald-500" /> : <ShieldX className="h-4 w-4 text-rose-500" />}
          {value}
        </div>
      )
    },
    {
      key: "status",
      label: "Status",
      render: (value) => {
        const statusColors = {
          "Saudável": "bg-emerald-100 text-emerald-700",
          "Exame": "bg-amber-100 text-amber-700",
          "Cirurgia": "bg-violet-100 text-violet-700",
          "Adotado": "bg-slate-200 text-slate-700"
        };
        return (
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[value] || "bg-slate-100 text-slate-700"}`}>
            {value}
          </span>
        );
      }
    },
    { key: "age", label: "Idade" }
  ];

  const actions = (row) => (
    <div className="flex items-center gap-2">
      <IconButton aria-label={`Editar ${row.name}`} title="Editar" tone="primary">
        <PenLine size={16} />
      </IconButton>
      <IconButton aria-label={`Ver ${row.name}`} title="Ver" onClick={() => handleView(row)}>
        <Eye size={16} />
      </IconButton>
      <IconButton aria-label={`Excluir ${row.name}`} title="Excluir" onClick={() => handleDelete(row)} tone="danger">
        <Trash2 size={16} />
      </IconButton>
    </div>
  );

  return (
    <PageContainer>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Animais em Abrigo</h1>
          <p className="mt-1 text-sm text-slate-500">Controle de entradas, cuidados e status clinico dos patudos.</p>
        </div>
        <Button onClick={() => setIsCreateOpen(true)}>
          <Plus className="h-4 w-4" />
          Novo Animal
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <FilterTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <p className="text-sm text-slate-500">142 animais ativos</p>
      </div>

      <div className="mt-4">
        <DataTable
          columns={columns}
          data={animalData}
          actions={actions}
          emptyMessage="Nenhum animal encontrado."
          rowKey="id"
          tableClassName="max-h-96 overflow-y-auto custom-scrollbar"
        />
      </div>

      <Modal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Novo animal"
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsCreateOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" form="animal-create-form">Salvar</Button>
          </>
        }
      >
        <form id="animal-create-form" onSubmit={handleCreateSubmit} className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Digite o nome do animal"
            required
          />
          <Input
            label="Raca"
            name="breed"
            value={formData.breed}
            onChange={handleFormChange}
            placeholder="Digite a raca"
            required
          />
          <Select
            label="Genero"
            name="gender"
            value={formData.gender}
            onChange={handleFormChange}
            required
          >
              <option value="">Selecione</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Femea</option>
          </Select>
          <Select
            label="Temperamento"
            name="temperament"
            value={formData.temperament}
            onChange={handleFormChange}
            required
          >
              <option value="">Selecione</option>
              <option value="Dócil">Docil</option>
              <option value="Calmo">Calmo</option>
              <option value="Normal">Normal</option>
              <option value="Agressivo">Agressivo</option>
          </Select>
          <Select
            label="Vermifugado"
            name="dewormed"
            value={formData.dewormed}
            onChange={handleFormChange}
            required
          >
              <option value="">Selecione</option>
              <option value="Vermifugado">Vermifugado</option>
              <option value="Não vermifugado">Nao vermifugado</option>
          </Select>
          <Select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleFormChange}
            required
          >
              <option value="">Selecione</option>
              <option value="Saudável">Saudavel</option>
              <option value="Exame">Exame</option>
              <option value="Cirurgia">Cirurgia</option>
              <option value="Adotado">Adotado</option>
          </Select>
          <Input
            label="Idade"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleFormChange}
            placeholder="Digite a idade"
            required
          />
        </form>
      </Modal>

      <Modal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        title="Detalhes do animal"
        size="sm"
      >
        {selectedAnimal && (
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-slate-500">Nome</p>
              <p className="font-medium">{selectedAnimal.name}</p>
            </div>
            <div>
              <p className="text-slate-500">Raca</p>
              <p className="font-medium">{selectedAnimal.breed}</p>
            </div>
            <div>
              <p className="text-slate-500">Genero</p>
              <p className="font-medium">{selectedAnimal.gender}</p>
            </div>
            <div>
              <p className="text-slate-500">Temperamento</p>
              <p className="font-medium">{selectedAnimal.temperament}</p>
            </div>
            <div>
              <p className="text-slate-500">Vermifugado</p>
              <p className="font-medium">{selectedAnimal.dewormed}</p>
            </div>
            <div>
              <p className="text-slate-500">Status</p>
              <p className="font-medium">{selectedAnimal.status}</p>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteOpen}
        title="Excluir animal"
        message={`Tem certeza que deseja excluir ${selectedAnimal?.name || "este animal"}?`}
        confirmLabel="Excluir"
        onConfirm={() => setIsDeleteOpen(false)}
        onCancel={() => setIsDeleteOpen(false)}
      />
    </PageContainer>
  );
}

export default Animals;
