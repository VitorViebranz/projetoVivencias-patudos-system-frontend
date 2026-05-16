import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import ButtonLink from '../components/ui/ButtonLink';
import Select from '../components/ui/Select';
import { ArrowLeft, Save } from 'lucide-react';

function InventoryForm() {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    quantity: '',
    unit: '',
    supplier: '',
    donor: '',
    expiration: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar o item
    console.log('Salvando item:', formData);
    // Redirecionar ou mostrar sucesso
  };

  const isFeed = formData.type === 'feed';
  const isDonation = formData.type === 'donation';

  return (
    <PageContainer>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/inventory" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold">Adicionar Item ao Estoque</h1>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Select
              label="Tipo de item"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o tipo</option>
              <option value="feed">Ração</option>
              <option value="donation">Doação/Insumo</option>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite o nome do item"
              required
            />
            <Input
              label="Quantidade"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Digite a quantidade"
              required
            />
            <Input
              label="Unidade"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              placeholder="Ex: kg, unidades, kits"
              required
            />

            {isFeed && (
              <>
                <Input
                  label="Fornecedor"
                  name="supplier"
                  value={formData.supplier}
                  onChange={handleChange}
                  placeholder="Digite o fornecedor"
                  required
                />
                <Input
                  label="Validade"
                  name="expiration"
                  type="date"
                  value={formData.expiration}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  placeholder="Digite o nome do doador"
                  required
                />
                <Input
                  label="Data da Doação"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <ButtonLink to="/inventory" variant="secondary">Cancelar</ButtonLink>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              Salvar Item
            </Button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
}

export default InventoryForm;
