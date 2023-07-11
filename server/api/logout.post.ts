export default defineEventHandler(async (event) => {
  const auth = AuthStateSchema.parse({ user: null });
  setAuthState(event, auth);
  return { auth, error: null };
});
