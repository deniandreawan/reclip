import {
	type LoaderFunctionArgs,
	type MetaFunction,
	json,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";

import { authServer } from "~/auth/auth.server";
import { Header } from "~/components/header";
import { Hero } from "~/components/hero";
import { PromptInput } from "~/components/prompt-input";

export const meta: MetaFunction = () => [
	{ title: "Reclip" },
	{ name: "description", content: "Making the Impossible" },
];

export async function loader({ request, context }: LoaderFunctionArgs) {
	const auth = authServer(context.cloudflare.env);
	const data = await auth.api.getSession({
		headers: request.headers,
	});

	return {
		session: data?.session,
		user: data?.user,
	};
}

export default function Index() {
	const { user } = useLoaderData<typeof loader>();

	return (
		<div className="scrollbar-hide min-h-[100svh]">
			<Header user={user} />
			<Hero />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.1, delay: 0.5 }}
				className="-translate-x-1/2 fixed bottom-5 left-1/2 z-20 flex w-full max-w-2xl flex-col gap-1.5 px-4 md:bottom-10"
			>
				<PromptInput user={user} />
			</motion.div>
		</div>
	);
}
