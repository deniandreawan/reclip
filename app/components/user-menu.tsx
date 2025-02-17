import { Link, useNavigate } from "@remix-run/react";
import { LogOutIcon, UserIcon, WalletIcon } from "lucide-react";
import { useCallback } from "react";

import { authClient } from "~/auth/auth.client";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import type { loader } from "~/routes/_index";

export function UserMenu({
	user,
}: { user: Awaited<ReturnType<typeof loader>>["user"] }) {
	const navigate = useNavigate();

	const signOut = useCallback(async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					navigate("/");
				},
			},
		});
	}, [navigate]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="size-8 cursor-pointer rounded-full">
					<AvatarImage
						src={
							user?.image
								? user.image
								: `https://avatar.vercel.sh/${user?.name}`
						}
					/>
					<AvatarFallback>
						<span className="text-xs">
							{user?.name.charAt(0)?.toUpperCase()}
						</span>
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="mx-4 w-[240px] rounded-2xl border border-border bg-background/40 text-muted-foreground shadow-md backdrop-blur-xl sm:mx-6"
				sideOffset={10}
			>
				<DropdownMenuLabel className="mx-1 my-2">
					<span className="truncate text-muted-foreground">{user?.name}</span>
				</DropdownMenuLabel>
				<DropdownMenuGroup className="p-1">
					<Link to="#">
						<DropdownMenuItem className="rounded-xl p-2 focus:bg-white/5">
							<UserIcon />
							Account
						</DropdownMenuItem>
					</Link>

					<Link to="#">
						<DropdownMenuItem className="rounded-xl p-2 focus:bg-white/5">
							<WalletIcon />
							Pricing
						</DropdownMenuItem>
					</Link>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup className="p-1">
					<DropdownMenuItem
						className="rounded-xl p-2 focus:bg-white/5 focus:text-red-400"
						onClick={signOut}
					>
						<LogOutIcon />
						Sign out
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
