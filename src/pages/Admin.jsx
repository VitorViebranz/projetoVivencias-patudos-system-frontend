import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import DataTable from "../components/ui/DataTable";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import IconButton from "../components/ui/IconButton";
import { Plus, Eye, Trash2 } from "lucide-react";

function Admin() {
  const users = [
    { id: 1, name: 'João Silva', email: 'joao@patudos.com', role: 'Admin' },
    { id: 2, name: 'Maria Santos', email: 'maria@patudos.com', role: 'Funcionário' },
    { id: 3, name: 'Carlos Oliveira', email: 'carlos@patudos.com', role: 'Voluntário' },
  ];

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    console.log("Novo usuario:", formData);
    setIsCreateOpen(false);
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setIsViewOpen(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setIsDeleteOpen(true);
  };

  const columns = [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Cargo' },
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

  return (
    <PageContainer>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Usuarios</h1>
          <p className="mt-1 text-sm text-slate-500">Controle de acessos e cargos da equipe.</p>
        </div>
        <Button onClick={() => setIsCreateOpen(true)}>
          <Plus className="h-4 w-4" />
          Novo Usuario
        </Button>
      </div>

      <div className="mt-6">
        <DataTable columns={columns} data={users} actions={actions} emptyMessage="Sem usuarios cadastrados." />
      </div>

      <Modal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Novo usuario"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsCreateOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" form="user-create-form">Salvar</Button>
          </>
        }
      >
        <form id="user-create-form" onSubmit={handleCreateSubmit} className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Digite o nome completo"
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormChange}
            placeholder="Digite o email"
            required
          />
          <div className="sm:col-span-2">
            <Select
              label="Cargo"
              name="role"
              value={formData.role}
              onChange={handleFormChange}
              required
            >
              <option value="">Selecione o cargo</option>
              <option value="Admin">Admin</option>
              <option value="Funcionário">Funcionario</option>
              <option value="Voluntário">Voluntario</option>
            </Select>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        title="Detalhes do usuario"
        size="sm"
      >
        {selectedUser && (
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-slate-500">Nome</p>
              <p className="font-medium">{selectedUser.name}</p>
            </div>
            <div>
              <p className="text-slate-500">Email</p>
              <p className="font-medium">{selectedUser.email}</p>
            </div>
            <div>
              <p className="text-slate-500">Cargo</p>
              <p className="font-medium">{selectedUser.role}</p>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteOpen}
        title="Excluir usuario"
        message={`Tem certeza que deseja excluir ${selectedUser?.name || "este usuario"}?`}
        confirmLabel="Excluir"
        onConfirm={() => setIsDeleteOpen(false)}
        onCancel={() => setIsDeleteOpen(false)}
      />
    </PageContainer>
  );
}

export default Admin;
