import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPosts = createServerFn({ method: 'GET' }).handler(async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await posts.json();
  return data.slice(0, 10) as Post[];
});

export const Route = createFileRoute('/posts')({
  loader: async () => await fetchPosts(),
  component: RouteComponent,
});

function RouteComponent() {
  const posts = Route.useLoaderData();

  return (
    <div className="flex gap-2 px-2">
      <ul className="basis-1/3 flex flex-col gap-2">
        {posts.map((post) => (
          <li key={post.id} className="p-2 bg-muted">
            <Link to="/posts/$postId" params={{ postId: post.id.toString() }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
