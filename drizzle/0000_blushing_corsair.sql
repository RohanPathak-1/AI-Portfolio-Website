CREATE TABLE `contact_inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`full_name` text NOT NULL,
	`email` text NOT NULL,
	`business_name` text,
	`service` text,
	`message` text NOT NULL,
	`locale` text DEFAULT 'en' NOT NULL,
	`fingerprint` text NOT NULL,
	`status` text DEFAULT 'received' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `contact_inquiries_fingerprint_created_idx` ON `contact_inquiries` (`fingerprint`,`created_at`);