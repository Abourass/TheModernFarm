import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
    // Load Markdown and MDX files in the `src/content/articles/` directory.
    loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            // Article-specific metadata
            category: z.string().optional(),
            difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
            readTime: z.string().optional(),
        }),
});

const tutorials = defineCollection({
    // Load Markdown and MDX files in the `src/content/tutorials/` directory.
    loader: glob({ base: './src/content/tutorials', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema - you can customize this as needed
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(),
            // You could add tutorial-specific fields here
            difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
            timeToComplete: z.string().optional(),
        }),
});

export const collections = { articles, tutorials };
