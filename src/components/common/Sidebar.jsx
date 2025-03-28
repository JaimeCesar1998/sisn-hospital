import { BarChart2, DollarSign, FileLineChartIcon, HeartPulse, Hospital, LayoutDashboardIcon, Menu, Settings, Users, ChevronLeft, ChevronRight, FlaskConical, Pill, GitCommitVertical, Droplet, Droplets } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{ name: "Visão Geral", icon: LayoutDashboardIcon, color: "#6366f1", href: "/" },
	{ name: "Gerir Consultas", icon: FlaskConical, color: "#6366f1", href: "/consultas" },
	{ name: "Farmácia", icon: Pill, color: "#D396f1", href: "/farmacia" },
	{ name: "Hemoterápia", icon: Droplets, color: "#EC4899", href: "/hemoterapia" },
	{ name: "RH", icon: Users, color: "#8B5CF6", href: "/administracao_nacional" },
	{ name: "Profissionais Clínicos", icon: HeartPulse, color: "#8B5CF6", href: "/corpo_clinico_nacional" },
	{ name: "Pacientes", icon: Users, color: "#EC4899", href: "/pacientes_nacional" },
	{ name: "Utilizadores", icon: Users, color: "#ca8a04", href: "/users" },
	{ name: "Relatórios", icon: FileLineChartIcon, color: "#ca8a04", href: "/j" },
	{ name: "Configurações do Hospital", icon: Hospital, color: "#10B981", href: "/hospitais_naciona" },
	{ name: "Definições", icon: Settings, color: "#6EE7B7", href: "/settings" }
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const location = useLocation();

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700 overflow-y-auto hide-scrollbar'>
				{/* LOGOS */}
				<div className='flex flex-col items-center mb-4'>
					<div className='flex items-center justify-center space-x-2'>
						<img src='/saude.png' alt='Logo da Saúde' className={`transition-all ${isSidebarOpen ? "w-14" : "w-8"}`} />
						<img src='/gov.png' alt='Logo do Governo' className={`transition-all ${isSidebarOpen ? "w-14" : "w-8"}`} />
					</div>
					{/* Nome do sistema */}
					<span className={`mt-2 text-white font-semibold transition-all text-center ${isSidebarOpen ? "text-sm" : "text-xs"}`}>
						{isSidebarOpen ? "Hospital Geral de Luanda" : "SYS-H"}
					</span>
				</div>

				{/* BOTÃO DE MENU */}
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit self-center mb-4'
				>
					{isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
				</motion.button>

				{/* MENU */}
				<nav className='mt-4 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => {
						const isActive = location.pathname === item.href;
						return (
							<Link key={item.href} to={item.href}>
								<motion.div
									className={`flex items-center p-4 text-sm font-medium rounded-lg transition-colors mb-2 ${
										isActive ? "bg-gray-700" : "hover:bg-gray-700"
									}`}
								>
									<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
									<AnimatePresence>
										{isSidebarOpen && (
											<motion.span
												className='ml-4 whitespace-nowrap'
												initial={{ opacity: 0, width: 0 }}
												animate={{ opacity: 1, width: "auto" }}
												exit={{ opacity: 0, width: 0 }}
												transition={{ duration: 0.2, delay: 0.3 }}
											>
												{item.name}
											</motion.span>
										)}
									</AnimatePresence>
								</motion.div>
							</Link>
						);
					})}
				</nav>

				{/* VERSÃO DO SISTEMA */}
				<div className='mt-4 text-center text-gray-400 text-xs'>
					Versão 1.0
				</div>
			</div>
		</motion.div>
	);
};

// Estilos para esconder a barra de rolagem
const style = document.createElement("style");
style.innerHTML = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overscroll-behavior: contain;
  }
`;
document.head.appendChild(style);

export default Sidebar;
