import { Link } from "react-router-dom";

const DataDrivenDecisions = () => {
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
        {/* Back link */}
        <div className="mb-8">
          <Link to="/writing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            ← Back to Writing
          </Link>
        </div>

        {/* Article */}
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-light text-foreground mb-4">Data-Driven Product Decisions: Beyond the Hype</h1>
            <p className="text-muted-foreground">November 28, 2024</p>
          </header>

          <div className="prose prose-gray max-w-none text-foreground leading-relaxed space-y-6">
            <p>
              "Data-driven" has become one of those buzzwords that everyone throws around but few people truly understand. After years of working with product teams and seeing both spectacular successes and costly failures, I've learned that being data-driven isn't about having more data—it's about asking better questions.
            </p>

            <p>
              The biggest mistake I see teams make is treating data as an oracle rather than a tool. They collect metrics obsessively, build beautiful dashboards, and then wonder why their products still fail to resonate with users. The problem isn't the data; it's the assumption that data alone can make decisions.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">The Framework That Works</h2>

            <p>
              Over the years, I've developed a simple framework that has consistently helped teams make better product decisions. It starts with three questions: What problem are we trying to solve? What would change if we solved it? How will we know if we've succeeded?
            </p>

            <p>
              These questions force you to think beyond the data to the underlying assumptions and desired outcomes. Only then can you determine what data you need and how to interpret it meaningfully.
            </p>

            <p>
              The best product decisions I've been part of combined quantitative insights with qualitative understanding, business context with user empathy, and short-term metrics with long-term vision. Data informed these decisions, but it didn't make them.
            </p>
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

export default DataDrivenDecisions;