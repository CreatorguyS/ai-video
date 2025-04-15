import { serial, pgTable, varchar, boolean } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull(),
  subscription: boolean('subscription').default(false),
});
