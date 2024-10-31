export default function Tasks() {
	return (
		<div className='flex flex-col max-w-96'>
			<h1 className='text-2xl font-bold text-center pb-4'>Lista de tarefas</h1>
			<p className='text-center pb-6'>
				Esta é a página de lista de tarefas, é uma <b>rota pública</b>, assim como a rota da página inicial.
			</p>
			<p className='text-center pb-6'>O campo abaixo é para ser utilizado como uma busca e pode ser utilizado para filtrar as tarefas através do hook useSearchParams.</p>
			<div className='flex flex-col w-96'>
				<h2 className='text-xl font-bold pb-2'>Pesquisar tarefa</h2>
				<form>
					<input type='text' placeholder='Digite uma tarefa e tecle enter...' required className='p-2 rounded w-full bg-transparent border border-white' />
				</form>
				<div className='w-full bg-slate-900 p-6 rounded mt-6'>
					<ul className='flex flex-col gap-2'>
						<li>
							<input type='checkbox' className='mr-2' />
							<span className='text-white'>Tarefa 1</span>
						</li>
						<li>
							<input type='checkbox' className='mr-2' />
							<span className='text-white'>Tarefa 1</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
