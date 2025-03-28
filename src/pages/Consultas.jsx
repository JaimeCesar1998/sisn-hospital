import { CalendarCheck, CalendarPlus, CalendarX, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import ConsultasTable from "../components/hospitais_nacional/hospitais_nacionalTable"; 

const consultaStats = {
	totalConsultas: 20,
	realizadasHoje: 5,
	concluidas: 12,
	pendentes: 3,
};

const ConsultasPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Painel de Consultas' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* ESTATÍSTICAS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total de Consultas'
						icon={Stethoscope}
						value={consultaStats.totalConsultas.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard
						name='Realizadas Hoje'
						icon={CalendarCheck}
						value={consultaStats.realizadasHoje.toLocaleString()}
						color='#10B981'
					/>
					<StatCard name='Concluídas' icon={CalendarPlus} value={consultaStats.concluidas} color='#F59E0B' />
					<StatCard name='Pendentes' icon={CalendarX} value={consultaStats.pendentes} color='#EF4444' />
				</motion.div>

				<ConsultasTable />

				{/* GRÁFICOS (caso queira adicionar algo aqui depois) */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'> 
				</div>
			</main>
		</div>
	);
};

export default ConsultasPage;
