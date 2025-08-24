import { Link } from "react-router-dom";

const Writing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-end space-x-8 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">home</Link>
            <Link to="/writing" className="text-muted-foreground hover:text-primary transition-colors">writing</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-foreground mb-2">Emre Ozdemir</h1>
          <p className="text-muted-foreground">Analytics and Product @ Zalando</p>
        </div>

        {/* Writing Section */}
        <section>
          <h2 className="text-xl font-medium text-foreground mb-8">Writing</h2>
          
          <div className="space-y-6">
            {/* Sample blog entries */}
            <article className="border-b border-border pb-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                <Link to="/blog/pricing-technology" className="hover:text-primary transition-colors">
                  The Future of Pricing Technology at Scale
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-3">December 15, 2024</p>
              <p className="text-foreground leading-relaxed">
                How we're building the next generation of pricing systems that can handle millions of products across multiple markets, and what I've learned about balancing automation with human insight.
              </p>
            </article>

            <article className="border-b border-border pb-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                <Link to="/blog/data-driven-decisions" className="hover:text-primary transition-colors">
                  Data-Driven Product Decisions: Beyond the Hype
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-3">November 28, 2024</p>
              <p className="text-foreground leading-relaxed">
                A practical guide to using analytics in product development, including the mistakes I've made and the frameworks that actually work in fast-paced environments.
              </p>
            </article>

            <article className="border-b border-border pb-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                <Link to="/blog/turkey-digital-economy" className="hover:text-primary transition-colors">
                  Understanding Modern Turkey Through Its Digital Economy
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-3">October 12, 2024</p>
              <p className="text-foreground leading-relaxed">
                An exploration of how Turkey's rapidly evolving tech landscape reflects broader political and social changes, and what it means for the country's future.
              </p>
            </article>

            <article className="border-b border-border pb-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                <Link to="/blog/slow-cooking" className="hover:text-primary transition-colors">
                  The Art of Slow Cooking: Lessons from My Istanbul Kitchen
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-3">September 8, 2024</p>
              <p className="text-foreground leading-relaxed">
                What I've learned about patience, tradition, and innovation through cooking the dishes my grandmother taught me, adapted for life in Berlin.
              </p>
            </article>
          </div>
        </section>
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

export default Writing;