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
            <Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors">resume</Link>
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
            <p className="text-muted-foreground">No posts yet.</p>
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