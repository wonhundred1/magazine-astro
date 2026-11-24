import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    region: z.string().default('Geoje'),
    tags: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    lastVerified: z.string().optional(),
  }),
});

export const collections = { posts };
