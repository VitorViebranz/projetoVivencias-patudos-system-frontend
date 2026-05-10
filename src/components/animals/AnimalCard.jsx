import { Mars, Venus, ShieldCheck, ShieldX } from "lucide-react";
import AnimalImage from "./AnimalImage";

function AnimalCard({ name, breed, gender, temperament, dewormed, status, age, image }) {

  const getAgeLabel = () => {
  if (!age) return null;

  if (age < 1) return "Filhote";
  if (age < 7) return "Adulto";
  return "Idoso";
};

const ageLabel = getAgeLabel();

const ageColors = {
  "Filhote": "bg-purple-100 text-purple-700",
  "Adulto": "bg-indigo-100 text-indigo-700",
  "Idoso": "bg-gray-200 text-gray-700"}  


  const isMale = gender === "Macho";
  const isDewormed = dewormed === "Vermifugado";

  const temperamentColors = {
    "Dócil": "bg-green-100 text-green-700",
    "Calmo": "bg-blue-100 text-blue-700",
    "Normal": "bg-yellow-100 text-yellow-700",
    "Agressivo": "bg-red-100 text-red-700"
  };

  const statusColors = {
    "Saudável": "bg-green-200 text-green-800",
    "Exame": "bg-orange-200 text-orange-800",
    "Cirurgia": "bg-purple-100 text-purple-700",
    "Adotado": "bg-gray-300 text-gray-700"
  };

  return (

    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-row gap-5 hover:shadow-lg transition items-start">

      {/* IMAGEM: */}
      <div className="w-32 h-32 shrink-0">
        <AnimalImage src={image} alt={name} />
      </div>

      {/* CONTEÚDO (Lado Direito) */}
      <div className="flex flex-col gap-2 flex-1">
        
        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold leading-none">{name}</h2>
            <p className="text-sm text-gray-500 mt-1">{breed}</p>
          </div>

          <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-lg ${statusColors[status]}`}>
            {status}
          </span>
        </div>

        {/* BADGES */}
        <div className="flex flex-wrap gap-2 mt-1">

  {/* IDADE */}
  {age && (
    <span className={`text-xs px-2 py-1 rounded-lg ${ageColors[ageLabel]}`}>
      {ageLabel} ({age} {age === 1 ? "ano" : "anos"})
    </span>
  )}

          {/* SEXO */}
          <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg ${
            isMale ? "bg-blue-100 text-blue-600" : "bg-pink-100 text-pink-600"
          }`}>
            {isMale ? <Mars size={14} /> : <Venus size={14} />}
            {gender}
          </span>

          {/* TEMPERAMENTO */}
          <span className={`text-xs px-2 py-1 rounded-lg ${temperamentColors[temperament]}`}>
            {temperament}
          </span>

          {/* VERMIFUGADO */}
          <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg ${
            isDewormed ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
          }`}>
            {isDewormed ? <ShieldCheck size={14}/> : <ShieldX size={14}/>}
            {isDewormed ? "Vermifugado" : "Não Vermifugado"}
          </span>

        </div>
      </div>
    </div>
  );
}

export default AnimalCard;