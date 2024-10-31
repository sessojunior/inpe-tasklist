import Link from "next/link"

export default function SignUp() {
	return (
		<div className='flex flex-col w-[400px] border border-white p-8 rounded'>
			<p className='pb-6'>
				<Link href='/' className='text-blue-400'>
					Voltar
				</Link>
			</p>
			<h1 className='text-2xl font-bold pb-6'>Registre-se para acessar</h1>
			<form>
				<div className='pb-4'>
					<label htmlFor='name' className='block pb-1'>
						Nome
					</label>
					<input type='text' id='name' placeholder='Digite seu nome...' required className='p-2 rounded w-full bg-transparent border border-white' />
				</div>
				<div className='pb-4'>
					<label htmlFor='email' className='block pb-1'>
						E-mail
					</label>
					<input type='text' id='email' placeholder='Digite seu e-mail...' required className='p-2 rounded w-full bg-transparent border border-white' />
				</div>
				<div className='pb-4'>
					<label htmlFor='password' className='block pb-1'>
						Senha
					</label>
					<input type='password' id='password' placeholder='Digite sua senha...' required className='p-2 rounded w-full bg-transparent border border-white' />
				</div>
				<div className='pb-4'>
					<button className='bg-blue-500 hover:bg-blue-600 py-2 px-4 text-center rounded'>Acessar</button>
				</div>
				<div>
					<p>
						Já tem uma conta?{" "}
						<Link href='/signup' className='text-blue-400'>
							Faça login
						</Link>
						.
					</p>
				</div>
			</form>
		</div>
	)
}
