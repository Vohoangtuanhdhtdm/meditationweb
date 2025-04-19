import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Sign/Signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Sign/Signup"!</div>
}
