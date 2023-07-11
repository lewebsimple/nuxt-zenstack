import { UserSchema } from "../../generated/zod/models";
import type { SeedFn } from "../seed";

export const seedAdminUser: SeedFn = async (prisma) => {
  const userData = {
    email: process.env.SEED_ADMIN_EMAIL || "admin@example.com",
    password: process.env.SEED_ADMIN_PASSWORD || "changeme",
  };
  const user = await prisma.user.upsert({
    where: { email: userData.email },
    create: userData,
    update: userData,
  });
  return UserSchema.parse(user);
};
