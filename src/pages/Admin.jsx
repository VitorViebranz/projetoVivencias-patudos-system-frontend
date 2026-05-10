import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import DataTable from '../components/ui/DataTable';
import { Plus, Eye, PenLine, Trash2 } from 'lucide-react';

function Admin() {
  const users = [
    { id: 1, name: 'João Silva', email: 'joao@patudos.com', role: 'Admin' },
    { id: 2, name: 'Maria Santos', email: 'maria@patudos.com', role: 'Funcionário' },
    { id: 3, name: 'Carlos Oliveira', email: 'carlos@patudos.com', role: 'Voluntário' },
  ];

  const columns = [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Cargo' },
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

  return (
    <PageContainer>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Administração de Usuários</h1>
        <Link to="/admin/add" className="bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500 transition-colors inline-flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Novo Usuário
        </Link>
      </div>

      <div className="mt-6">
        <DataTable columns={columns} data={users} actions={actions} />
      </div>
    </PageContainer>
  );
}

export default Admin;