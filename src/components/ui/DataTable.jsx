import React from 'react';
import { Mars, Venus, ShieldCheck, ShieldX } from "lucide-react";

const DataTable = ({ columns, data, actions, type }) => {
  const renderCell = (col, value, row) => {
    if (type === 'animals' && col.key === 'gender') {
      return (
        <div className="flex items-center gap-2">
          {value === 'Macho' ? <Mars className="w-4 h-4 text-blue-500" /> : <Venus className="w-4 h-4 text-pink-500" />}
          {value}
        </div>
      );
    }
    if (type === 'animals' && col.key === 'dewormed') {
      return (
        <div className="flex items-center gap-2">
          {value === 'Vermifugado' ? <ShieldCheck className="w-4 h-4 text-green-500" /> : <ShieldX className="w-4 h-4 text-red-500" />}
          {value}
        </div>
      );
    }
    if (type === 'animals' && col.key === 'status') {
      const statusColors = {
        "Saudável": "bg-green-200 text-green-800",
        "Exame": "bg-orange-200 text-orange-800",
        "Cirurgia": "bg-purple-100 text-purple-700",
        "Adotado": "bg-gray-300 text-gray-700"
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[value] || 'bg-gray-100 text-gray-700'}`}>
          {value}
        </span>
      );
    }
    if (type === 'animals' && col.key === 'temperament') {
      const temperamentColors = {
        "Dócil": "bg-green-100 text-green-700",
        "Calmo": "bg-blue-100 text-blue-700",
        "Normal": "bg-yellow-100 text-yellow-700",
        "Agressivo": "bg-red-100 text-red-700"
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${temperamentColors[value] || 'bg-gray-100 text-gray-700'}`}>
          {value}
        </span>
      );
    }
    return value;
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-2xl max-h-96 overflow-y-auto custom-scrollbar">
      <table className="min-w-full">
        <thead className="bg-yellow-50 sticky top-0 z-10">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {col.label}
              </th>
            ))}
            {actions && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-yellow-50 transition-colors">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {renderCell(col, row[col.key], row)}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {actions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;