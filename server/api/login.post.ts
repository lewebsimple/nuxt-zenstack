export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody<{ email: string; password: string }>(event);
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user || !user.verifyPassword(password)) throw new Error("AUTH_LOGIN_FAILED");
    const auth = AuthStateSchema.parse({ user });
    setAuthState(event, auth);
    return { auth, error: null };
  } catch (error) {
    const auth = AuthStateSchema.parse({ user: null });
    setAuthState(event, auth);
    return { auth, error: error instanceof Error ? error.message : (error as string) };
  }
});
