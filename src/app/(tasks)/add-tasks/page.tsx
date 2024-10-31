export default function AddTasks() {
	return (
		<div className='flex flex-col max-w-96'>
			<h1 className='text-2xl font-bold text-center pb-4'>Nova tarefa</h1>
			<p className='text-center pb-6'>
				Esta é uma <b>rota privada</b>, requer login.
			</p>
			<p className='text-center pb-6'>O campo abaixo é para ser utilizado para adicionar uma tarefa.</p>
			<div className='flex flex-col w-96'>
				<h2 className='text-xl font-bold pb-2'>Adicionar tarefa</h2>
				<form>
					<input type='text' placeholder='Digite uma tarefa para adicionar e tecle enter...' required className='p-2 rounded w-full bg-transparent border border-white' />
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
