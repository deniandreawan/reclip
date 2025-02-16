import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/d1";

import * as schema from "~/database/schema";

export const authServer = (env: Env) => {
	return betterAuth({
		database: drizzleAdapter(drizzle(env.DB), {
			provider: "sqlite",
			schema,
		}),
		secondaryStorage: {
			get: async (key) => await env.KV.get(`_auth:${key}`, "json"),
			set: async (key, value, ttl) =>
				await env.KV.put(`_auth:${key}`, JSON.stringify(value), {
					expirationTtl: ttl,
				}),
			delete: async (key) => await env.KV.delete(`_auth:${key}`),
		},
		socialProviders: {
			google: {
				clientId: env.GOOGLE_CLIENT_ID || "",
				clientSecret: env.GOOGLE_CLIENT_SECRET || "",
			},
		},
		user: {
			deleteUser: {
				enabled: true,
			},
		},
		rateLimit: {
			enabled: true,
			storage: "secondary-storage",
			window: 60,
			max: 10,
		},
	});
};
