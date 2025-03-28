import { ActivitySquare, AlertCircle, Bed, ClipboardCheck, FlaskConical, Hash, Heart, HeartPulse, Hospital, Microscope, Pill, Scissors, ShoppingBag, Stethoscope, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import SalesChannelChar from "../components/overview/surtosChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Visão Geral' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard className="bg-gray-900" name='Total de Administrativos' icon={Users} value='6' color='#10B981' />
					<StatCard name='Total de Consultas' icon={FlaskConical} value='4' color='#10B981' />
					<StatCard name='Total de Profissionais Clínicos' icon={HeartPulse} value='6' color='#10B981' />
					<StatCard name='Total de Pacientes' icon={Users} value='6' color='#10B981' />
					<StatCard name='Total de Leitos' icon={Bed} value='10' color='#10B981' />
					<StatCard name='Total de Procedimentos Cirúrgicos' icon={Scissors} value='2' color='#10B981' />
					<StatCard name='Total de Atendimentos de Urgência e Emergência' icon={AlertCircle} value='8' color='#10B981' />
					<StatCard name='Total de Exames Realizados' icon={FlaskConical} value='12' color='#10B981' />
					<StatCard name='Total de Internações' icon={Bed} value='5' color='#10B981' />
					<StatCard name='Total de Altas Médicas' icon={ClipboardCheck} value='3' color='#10B981' />
					<StatCard name='Total de Medicamentos Administrados' icon={Pill} value='15' color='#10B981' />
					<StatCard name='Total de Procedimentos Ambulatoriais' icon={Stethoscope} value='7' color='#10B981' />
					<StatCard name='Total de Serviços de Diagnóstico' icon={Microscope} value='9' color='#10B981' />
					<StatCard name='Total de Pacientes em UTI' icon={ActivitySquare} value='4' color='#10B981' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart /> 
					<CategoryDistributionChart />
					<SalesChannelChar />
					<SalesChannelChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;
