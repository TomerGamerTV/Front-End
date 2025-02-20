import { signIn } from "$lib/auth";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async (event) => {
    try {
      await signIn(event);
    } catch (error) {
      console.error("Sign-in error:", error);
      throw error;
    }
  },
};
