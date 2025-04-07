import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          Post
        </Link>
      </div>
      <hr />
      <div className="bg-slate-700 text-white p-2 rounded-md mt-2">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
