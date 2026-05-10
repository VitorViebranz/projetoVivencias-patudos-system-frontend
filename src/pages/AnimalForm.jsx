import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';

function AnimalForm() {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    gender: '',
    temperament: '',
    dewormed: '',
    status: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar o animal
    console.log('Salvando animal:', formData);
    // Redirecionar ou mostrar sucesso
  };

  return (
    <PageContainer>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/animals" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold">Cadastrar Novo Animal</h1>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite o nome do animal"
              required
            />
            <Input
              label="Raça"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Digite a raça"
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gênero</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              >
                <option value="">Selecione</option>
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Temperamento</label>
              <select
                name="temperament"
                value={formData.temperament}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              >
                <option value="">Selecione</option>
                <option value="Dócil">Dócil</option>
                <option value="Calmo">Calmo</option>
                <option value="Normal">Normal</option>
                <option value="Agressivo">Agressivo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vermifugado</label>
              <select
                name="dewormed"
                value={formData.dewormed}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              >
                <option value="">Selecione</option>
                <option value="Vermifugado">Vermifugado</option>
                <option value="Não vermifugado">Não vermifugado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              >
                <option value="">Selecione</option>
                <option value="Saudável">Saudável</option>
                <option value="Exame">Exame</option>
                <option value="Cirurgia">Cirurgia</option>
                <option value="Adotado">Adotado</option>
              </select>
            </div>
            <Input
              label="Idade"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="Digite a idade"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <Link to="/animals">
              <Button className="bg-gray-300 hover:bg-gray-400 text-gray-700">Cancelar</Button>
            </Link>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              Salvar Animal
            </Button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
}

export default AnimalForm;