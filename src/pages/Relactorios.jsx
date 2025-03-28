import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const RELATORIO_DATA = [
  { name: "Malária", casos: 15000, categoria: "Endemia" },
  { name: "Cólera", casos: 3200, categoria: "Epidemia" },
  { name: "Dengue", casos: 1800, categoria: "Epidemia" },
  { name: "Sarampo", casos: 950, categoria: "Epidemia" },
  { name: "Covid-19", casos: 700, categoria: "Pandemia" },
  { name: "Febre Amarela", casos: 400, categoria: "Epidemia" },
];

const Relatorios = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("");

  const dadosFiltrados = filtroCategoria
    ? RELATORIO_DATA.filter((dado) => dado.categoria === filtroCategoria)
    : RELATORIO_DATA;

  return (
<div className="p-6 bg-gray-900 text-white rounded-lg shadow-md z-10 relative">

      <h2 className="text-2xl font-bold mb-4 text-center">Relatório Detalhado</h2>

      <div className="flex space-x-4 mb-6">
        <select
          className="p-2 bg-gray-800 rounded border border-gray-600"
          onChange={(e) => setFiltroCategoria(e.target.value)}
          value={filtroCategoria}
        >
          <option value="">Todas Categorias</option>
          <option value="Endemia">Endemia</option>
          <option value="Epidemia">Epidemia</option>
          <option value="Pandemia">Pandemia</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={dadosFiltrados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="casos" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Relatorios;
