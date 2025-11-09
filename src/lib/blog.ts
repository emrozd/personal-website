export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content?: string;
  excerpt?: string;
}

// Blog posts metadata for listing page
export const blogPosts: BlogPost[] = [
  {
    slug: "pasta-alla-norma",
    title: "Pasta Alla Norma",
    date: "2025-01-15",
    excerpt: "A classic Sicilian pasta dish featuring fried eggplant, tomato sauce, and ricotta salata.",
  },
];

// Simple function to strip frontmatter from markdown
function stripFrontmatter(markdown: string): string {
  const frontmatterRegex = /^---\n[\s\S]*?\n---\n/;
  return markdown.replace(frontmatterRegex, '').trim();
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Find the metadata
    const metadata = blogPosts.find(post => post.slug === slug);
    if (!metadata) return null;
    
    // Dynamic import of markdown file
    const markdown = await import(`../content/blog/${slug}.md?raw`);
    const content = stripFrontmatter(markdown.default);
    
    return {
      ...metadata,
      content,
    };
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
}
