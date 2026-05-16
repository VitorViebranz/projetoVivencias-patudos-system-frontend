import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import ButtonLink from '../components/ui/ButtonLink';
import Select from '../components/ui/Select';
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
            <Select
              label="Genero"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
                <option value="">Selecione</option>
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
            </Select>
            <Select
              label="Temperamento"
              name="temperament"
              value={formData.temperament}
              onChange={handleChange}
              required
            >
                <option value="">Selecione</option>
                <option value="Dócil">Dócil</option>
                <option value="Calmo">Calmo</option>
                <option value="Normal">Normal</option>
                <option value="Agressivo">Agressivo</option>
            </Select>
            <Select
              label="Vermifugado"
              name="dewormed"
              value={formData.dewormed}
              onChange={handleChange}
              required
            >
                <option value="">Selecione</option>
                <option value="Vermifugado">Vermifugado</option>
                <option value="Não vermifugado">Não vermifugado</option>
            </Select>
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
                <option value="">Selecione</option>
                <option value="Saudável">Saudável</option>
                <option value="Exame">Exame</option>
                <option value="Cirurgia">Cirurgia</option>
                <option value="Adotado">Adotado</option>
            </Select>
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
            <ButtonLink to="/animals" variant="secondary">Cancelar</ButtonLink>
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
