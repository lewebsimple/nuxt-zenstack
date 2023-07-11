import { type AuthState } from "~/server/utils/auth";

export default defineNuxtPlugin(() => {
  const auth = useRequestEvent().context.auth as AuthState;
  useState<AuthState>("auth", () => auth);
});
