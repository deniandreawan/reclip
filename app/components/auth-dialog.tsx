import { Link } from "@remix-run/react";
import { MailIcon } from "lucide-react";
import { useCallback } from "react";

import { authClient } from "~/auth/auth.client";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "~/components/ui/dialog";

interface AuthDialogProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export function AuthDialog({ open, setOpen }: AuthDialogProps) {
	const signIn = useCallback(async () => {
		await authClient.signIn.social({ provider: "google", callbackURL: "/" });
	}, []);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="flex max-w-2xl flex-col items-center justify-center rounded-3xl bg-zinc-900 p-6 sm:rounded-3xl sm:p-0 md:flex-row">
				<DialogTitle className="relative hidden md:block">
					<div className="my-4 ml-4 h-80 w-80 rounded-xl bg-zinc-800">
						<img
							className="h-auto w-full rounded-xl object-cover"
							alt="Image auth"
							loading="lazy"
							decoding="async"
							src="/bg-auth.webp"
						/>
					</div>
				</DialogTitle>
				<div className="flex w-full flex-col justify-center pt-2 sm:p-4">
					<Link to="/" className="mb-4 flex items-center justify-center">
						<Icons.logo className="size-6" />
					</Link>
					<span className="mb-8 text-center text-muted-foreground text-sm">
						Sign in to make your design
					</span>
					<div className="flex flex-col space-y-4">
						<Button
							className="rounded-full"
							onClick={signIn}
							size="lg"
							variant="secondary"
						>
							<Icons.google className="size-4" />
							Continue with Google
						</Button>
						<Button className="rounded-full" size="lg">
							<MailIcon className="size-4" />
							Continue with Email
						</Button>
					</div>
				</div>
				<DialogDescription />
			</DialogContent>
		</Dialog>
	);
}
