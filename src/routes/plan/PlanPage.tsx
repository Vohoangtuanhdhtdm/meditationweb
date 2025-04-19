import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/plan/PlanPage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/plan/PlanPage"!</div>
}
