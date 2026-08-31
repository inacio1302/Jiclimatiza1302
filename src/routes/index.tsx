import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Jiclimatiza | Instalação e Manutenção de Ar Condicionado',
      },
      {
        name: 'description',
        content: 'Serviços especializados de manutenção preventiva, corretiva e instalação de ar condicionado.',
      },
    ],
  }),
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Jiclimatiza</h1>
      <p className="text-lg text-slate-300 max-w-md">
        Soluções em instalação, manutenção preventiva e corretiva de ar condicionado.
      </p>
    </main>
  )
}
