import { Link } from "react-router-dom";

const PricingTechnology = () => {
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
            <h1 className="text-3xl font-light text-foreground mb-4">The Future of Pricing Technology at Scale</h1>
            <p className="text-muted-foreground">December 15, 2024</p>
          </header>

          <div className="prose prose-gray max-w-none text-foreground leading-relaxed space-y-6">
            <p>
              Building pricing systems that can handle millions of products across multiple markets is one of the most complex challenges in modern e-commerce. At Zalando, we've learned that the key isn't just about processing power or algorithmic sophistication—it's about finding the right balance between automation and human insight.
            </p>

            <p>
              When we first started scaling our pricing technology, we made the classic mistake of trying to automate everything. We built sophisticated machine learning models that could process vast amounts of market data, competitor pricing, and demand signals. The results were mathematically optimal but commercially naive.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">The Human Element</h2>

            <p>
              What we discovered was that pricing isn't just a data problem—it's a communication problem. Every price tells a story about your brand, your positioning, and your relationship with customers. No algorithm, no matter how sophisticated, can understand the nuances of brand perception or the strategic implications of pricing decisions.
            </p>

            <p>
              This led us to develop what we call "augmented pricing"—systems that combine the processing power of machines with the strategic thinking of humans. Our pricing analysts don't just review algorithmic outputs; they're embedded in the decision-making process from the beginning.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Lessons Learned</h2>

            <p>
              The most important lesson we've learned is that scale doesn't just mean processing more data—it means making better decisions faster. This requires rethinking not just our technology stack, but our entire approach to pricing strategy.
            </p>

            <p>
              As we continue to evolve our pricing technology, I'm excited about the possibilities that lie ahead. The future isn't about replacing human judgment with artificial intelligence—it's about creating systems that amplify human intelligence at unprecedented scale.
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

export default PricingTechnology;