import { ErrorComponent, createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';

import type { ErrorComponentProps } from '@tanstack/react-router';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchPost = createServerFn({
  method: 'GET',
})
  .validator((data: string) => {
    return data;
  })
  .handler(async ({ data }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${data}`,
    );

    const post = (await response.json()) as Post;

    return post;
  });

export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params }) => {
    const post = await fetchPost({ data: params.postId });

    return post;
  },
  component: RouteComponent,
  errorComponent: PostErrorComponent,
  notFoundComponent: () => <div>Post not found</div>,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function RouteComponent() {
  const post = Route.useLoaderData();

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>userId: {post.userId}</p>
      <p>id: {post.id}</p>
    </div>
  );
}
