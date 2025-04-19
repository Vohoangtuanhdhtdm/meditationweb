import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dmt')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dmt"!</div>
}
