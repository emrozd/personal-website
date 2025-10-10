import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPost, BlogPost as BlogPostType } from "@/lib/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    getBlogPost(slug).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              <span className="font-bold">Emre</span> Ozdemir
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">home</Link>
              <Link to="/writing" className="text-muted-foreground hover:text-primary transition-colors">writing</Link>
              <a href="https://drive.google.com/file/d/15eSE0XHL9lSEnxP8VQ9lR9mnLRelNRUi/view" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">resume</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-8">
        {/* Back link */}
        <div className="mb-8">
          <Link to="/writing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            ← Back to Writing
          </Link>
        </div>

        {/* Article */}
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-light text-foreground mb-4">{post.title}</h1>
            <p className="text-muted-foreground">{post.date}</p>
          </header>

          <div className="prose prose-gray max-w-none text-foreground leading-relaxed space-y-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-xl font-medium text-foreground mt-8 mb-4">
                    {children}
                  </h2>
                ),
                p: ({ children }) => (
                  <p className="mb-6">{children}</p>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 mt-16 border-t border-border">
        <div className="text-center text-xs text-muted-foreground">
          © Copyright 2025 Emre Ozdemir. Powered by React.
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
