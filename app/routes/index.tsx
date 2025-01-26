import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="bg-muted p-4">
			<h3>Shadcn UI & Next Themes</h3>
		</div>
	);
}
