import { Link } from "react-router-dom";

const TurkeyDigitalEconomy = () => {
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
            <h1 className="text-3xl font-light text-foreground mb-4">Understanding Modern Turkey Through Its Digital Economy</h1>
            <p className="text-muted-foreground">October 12, 2024</p>
          </header>

          <div className="prose prose-gray max-w-none text-foreground leading-relaxed space-y-6">
            <p>
              Turkey's digital transformation over the past decade tells a fascinating story about a country caught between worlds—geographically, politically, and economically. As someone who grew up there and now works in tech in Berlin, I've watched this evolution with both personal and professional interest.
            </p>

            <p>
              The numbers are striking: Turkey has one of the highest rates of social media adoption in the world, a thriving e-commerce sector, and a growing fintech ecosystem. But these statistics only scratch the surface of a more complex narrative about modernization, regulation, and the role of technology in society.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">The Paradox of Progress</h2>

            <p>
              What's particularly interesting about Turkey's digital economy is how it reflects the country's broader contradictions. You have incredibly sophisticated startups operating alongside traditional businesses that still rely on cash transactions. You have young entrepreneurs building world-class products while navigating an increasingly complex regulatory environment.
            </p>

            <p>
              This tension between innovation and control, between global connectivity and local concerns, isn't unique to Turkey. But it's particularly visible there, and it offers insights into how other emerging markets might evolve in the coming years.
            </p>

            <p>
              Understanding Turkey's digital economy isn't just about understanding Turkey—it's about understanding the future of technology in a multipolar world where different countries are charting their own paths toward digital transformation.
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

export default TurkeyDigitalEconomy;