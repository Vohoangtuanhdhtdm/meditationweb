import Landing from "@/components/module/Landing/Landing";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Landing />
      {/* <LandingPage /> */}
      {/* <Test /> */}
    </div>
  );
}
