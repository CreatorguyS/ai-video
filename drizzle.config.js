import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/config/schema.js", 
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_xLvEIP39aBld@ep-green-snowflake-a5i8g6j5-pooler.us-east-2.aws.neon.tech/ai-video?sslmode=require"
  },
});