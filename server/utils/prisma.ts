import { PrismaClient } from "@prisma/client";
import { withPresets } from "@zenstackhq/runtime";
import { type H3Event } from "h3";

import { type AuthState } from "./auth";

const prisma = new PrismaClient();

export function getExtendedPrisma(event: H3Event) {
  return withPresets(prisma, { user: (event.context.auth as AuthState).user || undefined });
}
