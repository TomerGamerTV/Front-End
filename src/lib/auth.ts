import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const authOptions = {
    providers: [
      GitHub({
        clientId: event.platform.env.AUTH_GITHUB_ID,
        clientSecret: event.platform.env.AUTH_GITHUB_SECRET,
        profile(profile) {
          return {
            role: profile.role ?? "user",
            ...profile,
            id: profile.id.toString(),
          };
        },
        callbacks: {
          jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
          },
          session({ session, token }) {
            session.user.role = token.role;
            return session;
          },
        },
      }),
    ],
    secret: event.platform.env.AUTH_SECRET,
    trustHost: true,
  };
  return authOptions;
});
