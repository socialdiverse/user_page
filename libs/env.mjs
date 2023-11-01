import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';


export const Env = createEnv({
  server: {
    // CLERK_SECRET_KEY: z.string().min(1),
    // DATABASE_URL: z.string().min(1),
    // DATABASE_AUTH_TOKEN: z.string().optional(),
    API_URL: z.string().min(1),
    NEXTAUTH_URL: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
  },
  client: {
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    // NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
    // NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
    // NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1),
    // NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1),
  },
  runtimeEnv: {
    API_URL: process.env.API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    // DATABASE_URL: process.env.DATABASE_URL,
    // DATABASE_AUTH_TOKEN: process.env.DATABASE_AUTH_TOKEN,
    // CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
    // process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    // NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    // NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    // NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:
    // process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    // NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:
    // process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
  },
});
