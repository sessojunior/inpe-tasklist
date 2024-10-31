import Link from "next/link"

export default function header() {
	return (
		<header className='flex items-center justify-between px-8 bg-gray-900 h-[72px]'>
			<div className='flex items-center'>
				<Link href='/' className='text-xl font-bold text-white'>
					Tarefas
				</Link>
				<Link href='/tasks' className='ml-4 text-white p-2 text-xs bg-green-800 hover:bg-green-900 rounded'>
					Todas as tarefas
				</Link>
				<div className='ml-4 text-white p-4 text-xs border border-white rounded'>
					<span className='text-white'>Rotas privadas:</span>
					<Link href='/private-tasks' className='ml-4 text-white p-2 text-xs bg-green-800 hover:bg-green-900 rounded'>
						Minhas tarefas
					</Link>
					<Link href='/add-tasks' className='ml-4 text-white p-2 text-xs bg-green-800 hover:bg-green-900 rounded'>
						Adicionar tarefa
					</Link>
				</div>
			</div>
			<div className='flex items-center'>
				<Link href='/signin' className='ml-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600'>
					Login
				</Link>
				<Link href='/signup' className='ml-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600'>
					Registrar
				</Link>
				<div className='ml-4 text-white p-4 text-xs border border-white rounded'>
					<span className='text-white'>Rotas privadas:</span>
					<Link href='/signin' className='ml-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600'>
						Meu perfil
					</Link>
					<Link href='/signin' className='ml-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600'>
						Sair
					</Link>
				</div>
			</div>
		</header>
	)
}
