export const load = async ({ locals }) => {
  return {
    session: locals.auth ? await locals.auth() : null,
  };
};
