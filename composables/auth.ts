import { type AuthState } from "~/server/utils/auth";

export function useAuth() {
  const auth = useState<AuthState>("auth", () => ({ user: null }));

  const isAuthenticated = computed(() => !!auth.value.user);

  async function login(credentials: {
    email: string;
    password: string;
  }): Promise<{ auth: AuthState; error: string | null }> {
    const result = await $fetch("/api/login", { method: "POST", body: credentials });
    auth.value = result.auth;
    return result;
  }

  async function logout(): Promise<{ auth: AuthState; error: string | null }> {
    const result = await $fetch("/api/logout", { method: "POST" });
    auth.value = result.auth;
    return result;
  }

  return { auth, isAuthenticated, login, logout };
}
