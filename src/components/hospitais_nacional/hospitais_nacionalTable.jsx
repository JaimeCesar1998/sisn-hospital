import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, LucideEye, Plus, Search } from "lucide-react";

const consultaData = [
    { id: 1, paciente: "João Silva", hipotese: "Gripe", medico: "Dr. André", data: "2024-03-25", status: "Realizada" },
    { id: 2, paciente: "Maria Santos", hipotese: "Hipertensão", medico: "Dra. Beatriz", data: "2024-03-26", status: "Concluída" },
    { id: 3, paciente: "Carlos Lima", hipotese: "Diabetes", medico: "Dr. Fernando", data: "2024-03-27", status: "Cancelada" },
    { id: 4, paciente: "Ana Costa", hipotese: "Asma", medico: "Dra. Júlia", data: "2024-03-28", status: "Concluída" },
    { id: 5, paciente: "Pedro Alves", hipotese: "Bronquite", medico: "Dr. Miguel", data: "2024-03-29", status: "Realizada" },
    { id: 6, paciente: "Laura Ferreira", hipotese: "Enxaqueca", medico: "Dra. Sofia", data: "2024-03-30", status: "Concluída" },
    { id: 7, paciente: "Ricardo Martins", hipotese: "Alergia", medico: "Dr. Paulo", data: "2024-03-31", status: "Cancelada" },
    { id: 8, paciente: "Fernanda Costa", hipotese: "Sinusite", medico: "Dra. Mariana", data: "2024-04-01", status: "Concluída" },
    { id: 9, paciente: "Bruno Souza", hipotese: "Febre", medico: "Dr. Lucas", data: "2024-04-02", status: "Realizada" },
    { id: 10, paciente: "Juliana Mendes", hipotese: "Hipotensão", medico: "Dra. Elisa", data: "2024-04-03", status: "Concluída" },
];

const statusColors = {
    "Realizada": "text-green-500",
    "Cancelada": "text-red-500",
    "Concluída": "text-yellow-500",
};

const ConsultasTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredConsultas, setFilteredConsultas] = useState(consultaData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = consultaData.filter(
            (consulta) => consulta.paciente.toLowerCase().includes(term) || consulta.hipotese.toLowerCase().includes(term)
        );
        setFilteredConsultas(filtered);
    };

    return (
        <motion.div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'>
            <div className='flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4'>
                <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-100 text-center md:text-left'>
                    Consultas Médicas
                </h2>
                <button className='mt-4 flex rounded items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
                    <Plus size={18} className='mr-2' /> Cadastrar
                </button>
                <div className="relative w-full max-w-xs">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Paciente</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Hipótese Diagnóstica</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Médico Responsável</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Data da Consulta</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Ações</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-700'>
                        {filteredConsultas.map((consulta) => (
                            <motion.tr key={consulta.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                <td className='px-6 py-4 text-gray-100'>{consulta.paciente}</td>
                                <td className='px-6 py-4 text-gray-300'>{consulta.hipotese}</td>
                                <td className='px-6 py-4 text-gray-300'>{consulta.medico}</td>
                                <td className='px-6 py-4 text-gray-300'>{consulta.data}</td>
                                <td className={`px-6 py-4 font-semibold ${statusColors[consulta.status]}`}>{consulta.status}</td>
                                <td className='px-6 py-4 flex space-x-2'>
                                    <button className='text-gray-400 hover:text-gray-300 p-2'><FileText size={20} /></button>
                                    <button className='text-yellow-600 hover:text-yellow-300 p-2'><LucideEye size={20} /></button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default ConsultasTable;
