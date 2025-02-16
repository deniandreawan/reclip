import { Form, Link, useNavigate } from "@remix-run/react";
import type { Session } from "better-auth";
import { useCallback } from "react";

import { authClient } from "~/auth/auth.client";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";

const links = [
	{
		title: "Pricing",
		path: "/",
	},
	{
		title: "Feedback",
		path: "/",
	},
	{
		title: "Updates",
		path: "/",
	},
];

export function Header({ session }: { session: Session | undefined }) {
	const navigate = useNavigate();

	const signIn = useCallback(async () => {
		await authClient.signIn.social({
			provider: "google",
			callbackURL: "/",
		});
	}, [authClient]);

	const signOut = useCallback(async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					navigate("/");
				},
			},
		});
	}, [authClient, navigate]);

	return (
		<header className="fixed z-[51] my-2 inline-flex h-[56px] w-full items-center justify-between px-4 md:my-4 md:h-[40px] md:px-6">
			<div className="flex h-full w-full items-center justify-between">
				<Link className="flex items-center space-x-3" to="/">
					<Icons.logo className="size-5" />
					<span className="font-bold text-sm uppercase">Reclip</span>
				</Link>
				<div className="flex shrink-0 items-center justify-end space-x-8">
					<nav className="hidden shrink-0 items-center space-x-8 md:flex">
						{links.map((item, index) => (
							<Link
								key={index}
								to={item.path}
								className="text-muted-foreground text-xs hover:text-primary"
							>
								{item.title}
							</Link>
						))}
					</nav>
					<Form onSubmit={session ? signOut : signIn}>
						<Button
							size="sm"
							className="rounded-full px-4"
							variant={session ? "destructive" : "default"}
							type="submit"
						>
							{session ? "Sign out" : "Sign in"}
						</Button>
					</Form>
				</div>
			</div>
		</header>
	);
}
