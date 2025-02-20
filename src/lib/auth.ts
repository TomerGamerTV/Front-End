import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const adminEmails = event.platform.env.ADMIN_EMAILS
    ? event.platform.env.ADMIN_EMAILS.split(",")
    : [];

  const authOptions = {
    providers: [
      GitHub({
        clientId: event.platform.env.AUTH_GITHUB_ID,
        clientSecret: event.platform.env.AUTH_GITHUB_SECRET,
      }),
    ],
    secret: event.platform.env.AUTH_SECRET,
    trustHost: true,
    callbacks: {
      async session({ session, user }: { session: any; user: any }) {
        // Check if the user's email is in the list of admin emails
        if (adminEmails.includes(user.email)) {
          session.user.role = "admin";
        } else {
          session.user.role = "user";
        }
        return session;
      },
    },
  };
  return authOptions;
});
