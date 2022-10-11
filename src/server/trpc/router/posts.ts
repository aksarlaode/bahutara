import { indexQuery } from "../../../lib/queries";
import { Post } from "../../../lib/types";
import { t } from "../trpc";

export const postRouter = t.router({
  getMany: t.procedure.query(({ ctx }) => {
    return ctx.posts.fetch<Post[]>(indexQuery);
  }),
});
