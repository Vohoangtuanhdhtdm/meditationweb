import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  const posts = ["post1", "post2", "post3"];
  return (
    <div>
      {posts.map((post) => (
        <div key={post} className="p-2">
          <h3>{post}</h3>
          <p>This is a description of {post}.</p>
          <p>Click to read more...</p>
          <Link
            to="/posts/$postId"
            params={{ postId: post }}
            className="[&.active]:font-bold"
          >
            {post}
          </Link>
        </div>
      ))}
    </div>
  );
}
