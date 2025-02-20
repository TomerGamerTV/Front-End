import { signIn } from "$lib/auth"; // Updated import path
import type { Actions } from "./$types";
export const actions: Actions = { default: signIn };
