import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
}

// Blog posts metadata for listing page
export const blogPosts: BlogPost[] = [
  {
    slug: "slow-cooking",
    title: "The Art of Slow Cooking: Lessons from My Istanbul Kitchen",
    date: "September 8, 2024",
    content: "",
    excerpt: "Reflections on tradition, adaptation, and the lessons learned from my grandmother's kitchen in Istanbul."
  },
  {
    slug: "pricing-technology",
    title: "The Future of Pricing Technology at Scale",
    date: "August 15, 2024",
    content: "",
    excerpt: "Exploring the balance between automation and human insight in modern e-commerce pricing systems."
  },
  {
    slug: "data-driven-decisions",
    title: "Data-Driven Product Decisions: Beyond the Hype",
    date: "July 22, 2024",
    content: "",
    excerpt: "Moving past buzzwords to understand what it really means to use data effectively in product development."
  },
  {
    slug: "turkey-digital-economy",
    title: "Turkey's Digital Economy: A Personal Perspective",
    date: "June 10, 2024",
    content: "",
    excerpt: "Observations on Turkey's tech scene from someone who grew up there and now works in European tech."
  }
];

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Dynamic import of markdown file
    const markdown = await import(`../content/blog/${slug}.md?raw`);
    const { data, content } = matter(markdown.default);
    
    return {
      slug: data.slug || slug,
      title: data.title || '',
      date: data.date || '',
      content: content,
    };
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
}
