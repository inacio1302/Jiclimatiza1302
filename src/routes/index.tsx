import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Jiclimatiza',
      },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <div>
      <h1>Jiclimatiza</h1>
    </div>
  )
}
