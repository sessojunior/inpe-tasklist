export default function MyTasks() {
	return (
		<div className='flex flex-col max-w-96'>
			<h1 className='text-2xl font-bold text-center pb-4'>Minhas tarefas</h1>
			<p className='text-center pb-6'>
				Olá <b>[nome do usuário]</b>, este é o seu painel. Esta página é uma <b>rota privada</b>.
			</p>
			<div className='flex flex-col w-96'>
				<h2 className='text-xl font-bold pb-2'>Pesquisar uma tarefa minha</h2>
				<form>
					<input type='text' placeholder='Digite uma tarefa e tecle enter...' required className='p-2 rounded w-full bg-transparent border border-white' />
				</form>
				<div className='w-full bg-slate-900 p-6 rounded mt-6'>
					<ul className='flex flex-col gap-2'>
						<li className='flex items-center justify-between'>
							<div>
								<input type='checkbox' className='mr-2' />
								<span className='text-white'>Tarefa 1</span>
							</div>
							<div>
								<button className='bg-red-500 hover:bg-red-600 py-1 px-2 text-xs text-center rounded'>Excluir</button>
							</div>
						</li>
						<li className='flex items-center justify-between'>
							<div>
								<input type='checkbox' className='mr-2' checked />
								<span className='text-white line-through'>Tarefa 2</span>
							</div>
							<div>
								<button className='bg-red-500 hover:bg-red-600 py-1 px-2 text-xs text-center rounded'>Excluir</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
