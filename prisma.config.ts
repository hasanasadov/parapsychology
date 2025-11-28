// prisma.config.ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Neon və ya istənilən Postgres URL-in
    url: env("DATABASE_URL"),
  },
});
