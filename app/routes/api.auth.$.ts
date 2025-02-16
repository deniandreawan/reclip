import type {
	ActionFunctionArgs,
	LoaderFunctionArgs,
} from "@remix-run/cloudflare";

import { authServer } from "~/auth/auth.server";

export async function loader({ request, context }: LoaderFunctionArgs) {
	return authServer(context.cloudflare.env).handler(request);
}

export async function action({ request, context }: ActionFunctionArgs) {
	return authServer(context.cloudflare.env).handler(request);
}
