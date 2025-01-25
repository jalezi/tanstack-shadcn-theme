import { createFileRoute } from '@tanstack/react-router';

import { Button } from '~/components/ui/button';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div>
      <h3>Welcome Home!!!</h3>
      <Button>Dela</Button>
    </div>
  );
}
