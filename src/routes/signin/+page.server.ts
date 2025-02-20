import { signIn } from "$lib/auth";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async (event) => {
    try {
      const response = await signIn(event);
      if (!response.ok) {
        throw new Error(`Sign-in failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      throw error;
    }
  },
};
