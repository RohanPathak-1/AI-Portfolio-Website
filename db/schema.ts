import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contactInquiries = sqliteTable("contact_inquiries", {
  id: text("id").primaryKey(), fullName: text("full_name").notNull(), email: text("email").notNull(),
  businessName: text("business_name"), service: text("service"), message: text("message").notNull(),
  locale: text("locale").notNull().default("en"), fingerprint: text("fingerprint").notNull(),
  status: text("status").notNull().default("received"), createdAt: integer("created_at").notNull(),
}, (table) => [index("contact_inquiries_fingerprint_created_idx").on(table.fingerprint, table.createdAt)]);
