import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Sign/Signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Sign/Signin"!</div>
}
