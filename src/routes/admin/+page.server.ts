import type { PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
  const session = await event.locals.auth();

  if (!(session?.user?.role === "admin")) {
    return fail(401, { type: "error", error: "Unauthenticated" });
  }

  return {
    session,
  };
};
