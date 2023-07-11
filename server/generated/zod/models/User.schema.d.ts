import { type z } from "zod";

export declare const UserSchema: z.ZodObject<
  Omit<
    {
      id: z.ZodString;
      email: z.ZodString;
      password: z.ZodString;
    },
    "password"
  >,
  "strip",
  z.ZodTypeAny,
  {
    id: string;
    email: string;
  },
  {
    id: string;
    email: string;
  }
>;
export declare const UserCreateSchema: z.ZodObject<
  {
    id: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    password: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    id?: string | undefined;
    email: string;
    password: string;
  },
  {
    id?: string | undefined;
    email: string;
    password: string;
  }
>;
export declare const UserUpdateSchema: z.ZodObject<
  {
    id: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
  },
  "strip",
  z.ZodTypeAny,
  {
    id?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
  },
  {
    id?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
  }
>;
