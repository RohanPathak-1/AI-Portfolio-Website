# Rohan Pathak — AI Marketing Expert Portfolio

A production-oriented, conversion-focused portfolio website built with Vinext/Next.js, React, TypeScript, and Tailwind CSS. It includes a complete homepage, About, Services, Blog, Contact, legal pages, a 404 page, SEO metadata, sitemap, robots rules, and a validated contact endpoint.

## Local development

Requirements: Node.js 22.13+ and pnpm.

```bash
pnpm install
pnpm dev
```

For a production check:

```bash
pnpm lint
pnpm build
```

## Update personal information

Edit `config/site.ts`. This is the main source of truth for:

- Name, title, biography, and professional story placeholder
- Email, phone, location, and website URL
- Booking URL and social profile URLs
- Service titles, descriptions, and outcomes

Values written as `YOUR_...` are intentionally explicit placeholders and must be replaced before a public launch.

## Replace the profile image

The current portrait is an intentional visual placeholder. Add an optimized image such as `public/images/rohan-pathak.webp`, update `profileImage` in `config/site.ts`, and replace the placeholder block in `components/profile-visual.tsx` with Next.js `Image`. Use a portrait with a consistent crop and meaningful alt text.

## Connect a booking calendar

Replace `bookingUrl` in `config/site.ts` with the full HTTPS URL from Calendly or another scheduling provider. Every site-wide booking CTA reads from this value. Until it is replaced, booking CTAs lead to the consultation section on `/contact`.

## Configure inquiry delivery

The form performs client-side and server-side validation, includes a spam honeypot, loading/error/success states, and never pretends a message was sent. Without a provider, it returns a clear configuration message.

Set this production environment variable in Sites:

```text
CONTACT_FORM_ENDPOINT=https://your-secure-form-handler.example/endpoint
```

The endpoint must accept JSON and return a successful 2xx response. It should send an email or save the lead in your approved CRM. Do not commit private API keys. If the provider needs authentication, replace the generic forwarding logic in `app/api/contact/route.ts` with the provider’s server-side SDK and store credentials as hosting secrets.

## Publish a blog article

Articles live in `lib/blog.ts`. Add a new object with a unique slug, title, metadata, category, date, introduction, and structured sections. The blog index, search, category filters, article route, related articles, homepage cards, and sitemap all read from this content source.

## SEO and legal review

The site includes page metadata, canonical URLs, Open Graph foundations, Person structured data, sitemap, robots rules, semantic headings, and descriptive visuals. Before a public launch:

1. Replace all personal and contact placeholders.
2. Confirm the final production domain in `config/site.ts`.
3. Add a real social sharing image and connect it in metadata.
4. Have `/privacy` and `/terms` reviewed for the real jurisdiction and providers.
5. Add only verified testimonials, credentials, clients, or case-study claims.

## Deployment

The project is configured for ChatGPT Sites in `.openai/hosting.json`. The Sites workflow builds, packages, saves, and deploys the verified source. New Sites are private by default.
