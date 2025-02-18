import { fail, redirect } from "@sveltejs/kit";
import type { ServerLoad } from "@sveltejs/kit";
import { handle as authHandle } from "./auth";

export const load: ServerLoad = async (event) => {
  const session = await event.locals.auth();

  if (!session?.user?.userId) {
    return fail(401, { type: "error", error: "Unauthenticated" });
  }

  return {
    session,
  };
};

export const handle = async ({ event, resolve }) => {
  // Apply authentication middleware first
  const response = await authHandle({ event, resolve });

  // Check if the user is trying to access a protected route
  if (event.url.pathname.startsWith("/admin") || event.url.pathname.startsWith("/dashboard")) {
    const userSession = await event.locals.getSession();
    if (!userSession || !userSession.user) {
      throw redirect(302, "/auth/signin");
    }
  }

  // Generate the response
  return response;
};
