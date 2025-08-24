import { Link } from "react-router-dom";

const SlowCooking = () => {
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
            <h1 className="text-3xl font-light text-foreground mb-4">The Art of Slow Cooking: Lessons from My Istanbul Kitchen</h1>
            <p className="text-muted-foreground">September 8, 2024</p>
          </header>

          <div className="prose prose-gray max-w-none text-foreground leading-relaxed space-y-6">
            <p>
              My grandmother's kitchen in Istanbul was a place of transformation. Not just of ingredients into meals, but of time into memory, of tradition into adaptation. Now, in my Berlin apartment, I find myself returning to those lessons as I navigate the intersection of old recipes and new realities.
            </p>

            <p>
              Slow cooking, I've learned, is as much about patience as it is about technique. It's about understanding that some things cannot be rushed, that flavor develops over time, and that the best meals are often the simplest ones done with care and attention.
            </p>

            <h2 className="text-xl font-medium text-foreground mt-8 mb-4">Tradition and Innovation</h2>

            <p>
              The dishes my grandmother taught me—slow-braised lamb with apricots, hours-long bone broths, vegetables cooked until they almost dissolve—these require a different relationship with time than our modern lives typically allow. But adapting them for life in Berlin has taught me about the difference between preserving tradition and being trapped by it.
            </p>

            <p>
              I've learned to use a pressure cooker for dishes that once took all day. I've substituted ingredients that aren't available at my local market. I've adjusted recipes for smaller portions and different occasions. Each adaptation is a small act of translation, carrying the essence of something while allowing it to evolve.
            </p>

            <p>
              In the end, slow cooking has taught me that authenticity isn't about rigid adherence to the past—it's about understanding the principles that make something work and applying them thoughtfully to new circumstances. Whether in the kitchen or in life, the best innovations build on timeless foundations.
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

export default SlowCooking;