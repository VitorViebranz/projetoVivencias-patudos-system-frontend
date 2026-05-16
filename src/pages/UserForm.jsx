import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import ButtonLink from '../components/ui/ButtonLink';
import Select from '../components/ui/Select';
import { ArrowLeft, Save } from 'lucide-react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar o usuário
    console.log('Salvando usuário:', formData);
    // Redirecionar ou mostrar sucesso
  };

  return (
    <PageContainer>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/admin" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold">Cadastrar Novo Usuário</h1>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite o nome completo"
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite o email"
              required
            />
            <div>
              <Select
                label="Cargo"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o cargo</option>
                <option value="Admin">Admin</option>
                <option value="Funcionário">Funcionário</option>
                <option value="Voluntário">Voluntário</option>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <ButtonLink to="/admin" variant="secondary">Cancelar</ButtonLink>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              Salvar Usuário
            </Button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
}

export default UserForm;
