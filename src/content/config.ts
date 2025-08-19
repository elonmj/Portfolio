import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Votre Nom'),
        image: z.string().optional(),
        tags: z.array(z.string()).default([]),
        category: z.string(),
        readTime: z.number().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    blog,
};
