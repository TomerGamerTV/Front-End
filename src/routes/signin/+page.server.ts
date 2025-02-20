import { signIn } from "$lib/auth";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async (event) => {
    try {
      // Ensure the event is correctly passed
      const response = await signIn(event); // Ensure this is handled correctly in your $lib/auth.ts file
      if (!response.ok) {
        throw new Error(`Sign-in failed: ${response.statusText}`);
      }

      // Redirect to a dashboard or another page on success
      throw redirect(303, "/dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
      throw error;
    }
  },
};
