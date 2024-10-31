import Link from "next/link"
import Image from "next/image"
import ImgTask from "./assets/img/tasks.png"

export default function Home() {
	return (
		<>
			<div className='flex flex-col items-center max-w-96'>
				<Image src={ImgTask} alt='Tarefas' priority className='max-w-72' />
				<h1 className='text-2xl font-bold text-center pb-4'>Lista de tarefas usando Next Auth v5, Zod e Vercel Postgres</h1>
				<p className='text-center pb-6'>
					Esta é a página inicial e é uma <b>rota pública</b>.
				</p>
				<div>
					<Link href='/tasks' className='bg-blue-500 hover:bg-blue-600 py-2 px-4 text-center rounded'>
						Lista de tarefas
					</Link>
				</div>
			</div>
		</>
	)
}
