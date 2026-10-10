import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['入门指南', '机场评测', '工具教程', '网络知识', 'AI资讯', '优惠情报', '风险预警']),
    tags: z.array(z.string()).min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    author: z.string().default('机场监测编辑部'),
    coverTone: z.enum(['lime', 'aqua', 'coral', 'violet']).default('lime'),
    featured: z.boolean().default(false),
    readingTime: z.string(),
    keywords: z.array(z.string()).min(1),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([])
  })
});

export const collections = { articles };
