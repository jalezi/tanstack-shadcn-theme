import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<main className=" grid place-items-center">
			<div className="bg-muted p-4 rounded-md">
				<h3>Shadcn UI & Next Themes</h3>
			</div>
		</main>
	);
}
