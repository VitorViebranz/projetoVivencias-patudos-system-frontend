import PageContainer from "../components/layout/PageContainer";
import DataTable from "../components/ui/DataTable";
import FilterTabs from "../components/animals/FilterTabs";
import { Plus, Eye, PenLine } from "lucide-react";
import { Link } from "react-router-dom";

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

  ];

  const columns = [
    { key: 'name', label: 'Nome' },
    { key: 'breed', label: 'Raça' },
    { key: 'gender', label: 'Gênero' },
    { key: 'temperament', label: 'Temperamento' },
    { key: 'dewormed', label: 'Vermifugado' },
    { key: 'status', label: 'Status' },
    { key: 'age', label: 'Idade' },
  ];

  const actions = (row) => (
    <div className="flex space-x-4">
      <button className="text-blue-500 hover:text-blue-700 transition-colors" title="Editar">
        <PenLine className="w-4 h-4" />
      </button>
      <button className="text-green-500 hover:text-green-700 transition-colors" title="Ver">
        <Eye className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <PageContainer>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Animais em Abrigo</h1>
        <Link to="/animals/add" className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-500 transition-colors inline-flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Novo Animal
        </Link>
      </div>

      <FilterTabs />

      <DataTable columns={columns} data={animalData} actions={actions} type="animals" />
    </PageContainer>
  );
}

export default Animals;