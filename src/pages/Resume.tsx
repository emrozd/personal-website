import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
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
      <main className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-light text-foreground">Resume</h1>
          <Button asChild variant="outline" size="sm">
            <a href="/resume.pdf" download="Emre_Ozdemir_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>
        
        {/* PDF Viewer */}
        <div className="w-full border border-border rounded-lg overflow-hidden bg-card">
          <iframe
            src="/resume.pdf"
            className="w-full h-[1000px]"
            title="Resume PDF"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-border mt-8">
        <div className="text-center text-xs text-muted-foreground">
          © Copyright 2025 Emre Ozdemir. Powered by React.
        </div>
      </footer>
    </div>
  );
};

export default Resume;