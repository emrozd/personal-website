import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-end space-x-8 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">home</Link>
            <Link to="/writing" className="text-muted-foreground hover:text-primary transition-colors">writing</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">resume</a>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Image - Mobile */}
            <div className="lg:hidden flex justify-center mb-8">
              <img src="/lovable-uploads/5ce97e7d-dfcc-48fc-aff9-a554c5d9a269.png" alt="Profile" className="w-48 h-48 rounded-full object-cover" />
            </div>

            {/* About Section */}
            <section id="about">
              <h2 className="text-xl font-medium text-foreground mb-4">About</h2>
              <div className="prose prose-gray max-w-none text-foreground leading-relaxed">
                <p>
                  Hey there. I'm an analytics and product professional at Zalando, and I'm currently based in Berlin.
                </p>
              </div>
            </section>

            {/* Research Section */}
            <section id="research">
              
              <div className="prose prose-gray max-w-none text-foreground leading-relaxed">
                
              </div>
            </section>

            {/* Writing Section */}
            <section id="writing">
              <h2 className="text-xl font-medium text-foreground mb-4">Writing</h2>
              <div className="prose prose-gray max-w-none text-foreground leading-relaxed">
                <p className="mb-4">
                  My work is all about working with incredible people, building great pricing products and digging into data. It's a job I love, and you'll see some of that here.
                </p>
                <p>
                  But there's more to me than that, and this is also a place for the other stuff I'm into. I'll be writing about the intersection of history, politics, and international relations with a specific focus in Turkey and Europe. I'll also be sharing my adventures in cooking.
                </p>
              </div>
            </section>

            {/* News Section */}
            
          </div>

          {/* Right Column - Profile Image - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <img src="/lovable-uploads/5ce97e7d-dfcc-48fc-aff9-a554c5d9a269.png" alt="Profile" className="w-full max-w-xs rounded-lg object-cover shadow-sm" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 mt-16 border-t border-border">
        <div className="text-center text-xs text-muted-foreground">
          © Copyright 2025 Emre Ozdemir. Powered by React.
        </div>
      </footer>
    </div>;
};
export default Index;