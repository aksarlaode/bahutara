// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { postRouter } from "./posts";

export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  posts: postRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
