import {
	Link,
	Outlet,
	ScrollRestoration,
	createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Meta, Scripts } from "@tanstack/start";

import { ModeToggle } from "~/components/mode-toggler";
import { ThemeProvider } from "~/components/theme-provider";
import { Button } from "~/components/ui/button";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "My App",
			},
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", href: "/favicon.ico" },
		],
	}),
	component: RootComponent,
	notFoundComponent: () => (
		<div>
			<h2 className="text-2xl text-center">404</h2>
			<div>
				<Button variant="link" asChild>
					<Link to="/">Home</Link>
				</Button>
			</div>
		</div>
	),
});

function RootComponent() {
	return (
		<RootDocument>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<header className="flex items-center justify-end p-2">
					<ModeToggle />
				</header>
				<main>
					<Outlet />
				</main>
			</ThemeProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<Meta />
			</head>
			<body>
				<div id="app" className="min-h-[100dvh]">
					{children}
				</div>
				<ScrollRestoration />
				<TanStackRouterDevtools position="bottom-right" />
				<Scripts />
			</body>
		</html>
	);
}
