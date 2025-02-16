import type { MetaFunction } from "@remix-run/cloudflare";

import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
				<header className="flex flex-col items-center gap-9">
					<h1 className="leading font-bold text-2xl text-gray-800 dark:text-gray-100">
						Welcome to <span className="sr-only">Remix</span>
					</h1>
					<div className="h-[144px] w-[434px]">
						<img
							src="/logo-light.png"
							alt="Remix"
							className="block w-full dark:hidden"
						/>
						<img
							src="/logo-dark.png"
							alt="Remix"
							className="hidden w-full dark:block"
						/>
					</div>
				</header>
				<Button>Click me!</Button>
			</div>
		</div>
	);
}
