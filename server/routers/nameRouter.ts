import { z } from "zod";
import { createRouter } from "../create-router";

export const nameRouter = createRouter().query("getName", {
  input: z.object({
    name: z.string().nullish(),
  }),
  resolve({ input }) {
    return { greeting: `Hello ${input.name}!` };
  },
});