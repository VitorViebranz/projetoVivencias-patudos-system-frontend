import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';

function FinanceForm() {
  const [formData, setFormData] = useState({
    type: '',
    amount: '',
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar a transação financeira
    console.log('Salvando transação:', formData);
    // Redirecionar ou mostrar sucesso
  };

  return (
    <PageContainer>
      <div className="flex items-center gap-4 mb-6">
        <Link to="/finance" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold">Adicionar Transação Financeira</h1>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              >
                <option value="">Selecione</option>
                <option value="income">Receita</option>
                <option value="expense">Despesa</option>
              </select>
            </div>
            <Input
              label="Valor (R$)"
              name="amount"
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0,00"
              required
            />
            <Input
              label="Data"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Descrição"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Digite uma descrição para a transação"
            required
          />

          <div className="flex justify-end gap-4">
            <Link to="/finance">
              <Button className="bg-gray-300 hover:bg-gray-400 text-gray-700">Cancelar</Button>
            </Link>
            <Button type="submit">
              <Save className="w-4 h-4 mr-2" />
              Salvar Transação
            </Button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
}

export default FinanceForm;