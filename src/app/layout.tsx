import type { Metadata } from "next"
import "./globals.css"

import Header from "./components/header"

export const metadata: Metadata = {
	title: "Tarefas",
	description: "Projeto de lista de tarefas usando login social",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-br'>
			<body>
				<Header />
				<main className='flex items-center justify-center h-[calc(100vh-72px)] bg-black text-white p-8'>{children}</main>
			</body>
		</html>
	)
}
