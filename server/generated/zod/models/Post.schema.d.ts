import { type z } from "zod";

export declare const PostSchema: z.ZodObject<
  {
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodBoolean;
  },
  "strip",
  z.ZodTypeAny,
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    published: boolean;
  },
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    published: boolean;
  }
>;
export declare const PostCreateSchema: z.ZodObject<
  {
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodOptional<z.ZodBoolean>;
  },
  "strip",
  z.ZodTypeAny,
  {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    published?: boolean | undefined;
    title: string;
    content: string;
  },
  {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    published?: boolean | undefined;
    title: string;
    content: string;
  }
>;
export declare const PostUpdateSchema: z.ZodObject<
  {
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
  },
  "strip",
  z.ZodTypeAny,
  {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
  },
  {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
  }
>;
