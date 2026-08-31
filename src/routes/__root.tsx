import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Jiclimatiza',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Outlet />
    </div>
  )
}
