import * as trpc from "@trpc/server";
import { MyContextType } from "./context";

export function createRouter() {
  return trpc.router<MyContextType>();
}