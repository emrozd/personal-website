import profilePhoto from "@/assets/profile-photo.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-end space-x-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">about</a>
            <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">blog</a>
            <a href="#publications" className="text-muted-foreground hover:text-primary transition-colors">publications</a>
            <a href="#vitae" className="text-muted-foreground hover:text-primary transition-colors">vitae</a>
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
            {/* Profile Image and Resume - Mobile */}
            <div className="lg:hidden flex flex-col items-center space-y-4 mb-8">
              <img src="/lovable-uploads/5ce97e7d-dfcc-48fc-aff9-a554c5d9a269.png" alt="Profile" className="w-48 h-48 rounded-full object-cover" />
              <a href="https://drive.google.com/file/d/15eSE0XHL9lSEnxP8VQ9lR9mnLRelNRUi/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline font-medium">
                📄 Resume/CV
              </a>
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
              <h2 className="text-xl font-medium text-foreground mb-4">Research</h2>
              <div className="prose prose-gray max-w-none text-foreground leading-relaxed">
                <p>
                  My research has focused on understanding how systems learn from large scale data, the way they represent knowledge, and their capabilities. I've been fortunate to have many wonderful mentors on these topics, including <a href="#" className="text-primary hover:underline">Dr. One</a>, <a href="#" className="text-primary hover:underline">Dr. Two</a>, and <a href="#" className="text-primary hover:underline">Dr. Three</a>.
                </p>
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
            <section id="news" className="border-t border-border pt-8">
              <h2 className="text-xl font-medium text-foreground mb-6">news</h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="text-muted-foreground text-sm whitespace-nowrap">Dec 22, 2024</div>
                  <div className="text-foreground">
                    <strong>Selected Awards:</strong> Delighted to be named one of the top innovators for our work on AI collaboration. More details of our work are discussed in <a href="#" className="text-primary hover:underline">this article</a>.
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="text-muted-foreground text-sm whitespace-nowrap">Dec 20, 2024</div>
                  <div className="text-foreground">
                    <strong>Selected Talks:</strong> Some of my invited talks and keynotes: <a href="#" className="text-primary hover:underline">Conference Talk</a> and <a href="#" className="text-primary hover:underline">Workshop Presentation</a>.
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Profile Image and Resume - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-8 space-y-4">
              <img src="/lovable-uploads/5ce97e7d-dfcc-48fc-aff9-a554c5d9a269.png" alt="Profile" className="w-full max-w-xs rounded-lg object-cover shadow-sm" />
              <a href="https://drive.google.com/file/d/15eSE0XHL9lSEnxP8VQ9lR9mnLRelNRUi/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline font-medium text-sm">
                📄 Resume/CV
              </a>
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