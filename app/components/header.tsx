import { Link } from "@remix-run/react";
import { useState } from "react";

import { AuthDialog } from "~/components/auth-dialog";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { UserMenu } from "~/components/user-menu";
import type { loader } from "~/routes/_index";

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

export function Header({
	user,
}: { user: Awaited<ReturnType<typeof loader>>["user"] }) {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<header className="fixed z-[40] my-2 inline-flex h-[56px] w-full items-center justify-between px-4 md:my-4 md:h-[40px] md:px-6">
			<div className="flex h-full w-full items-center justify-between">
				<Link className="flex items-center space-x-3" to="/">
					<Icons.logo className="size-5" />
					<span className="font-bold text-sm uppercase">Reclip</span>
				</Link>
				<div className="flex shrink-0 items-center justify-end space-x-8">
					<nav className="hidden shrink-0 items-center space-x-8 md:flex">
						{!user &&
							links.map((item, index) => (
								<Link
									key={index}
									to={item.path}
									className="text-muted-foreground text-xs hover:text-primary"
								>
									{item.title}
								</Link>
							))}
					</nav>
					{!user ? (
						<Button
							size="sm"
							className="rounded-full"
							onClick={() => setOpen(true)}
						>
							Sign in
						</Button>
					) : (
						<UserMenu user={user} />
					)}
				</div>
			</div>
			{!user && <AuthDialog open={open} setOpen={setOpen} />}
		</header>
	);
}
