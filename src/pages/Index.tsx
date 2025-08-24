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
              <img src={profilePhoto} alt="Profile" className="w-48 h-48 rounded-full object-cover" />
              <a href="#resume" className="inline-flex items-center text-primary hover:underline font-medium">
                📄 Resume/CV
              </a>
            </div>

            {/* About Section */}
            <section id="about">
              <h2 className="text-xl font-medium text-foreground mb-4">About</h2>
              <div className="prose prose-gray max-w-none text-foreground leading-relaxed">
                <p className="mb-4">
                  Welcome! I'm an analytics and product professional, with a specific focus on pricing. I currently work for Zalando in Berlin.
                </p>
                <p className="mb-4">
                  From 2015 to 2022, I was a Research Scientist with the incredible <a href="#" className="text-primary hover:underline font-medium">Tech Company</a>, studying cutting-edge systems. I received my PhD in Computer Science at <strong>Your University</strong>, advised by <a href="#" className="text-primary hover:underline">Dr. Advisor</a>. I completed my undergraduate in Mathematics at <strong>Another University</strong>.
                </p>
                <p>
                  I have many fond memories of competing in national competitions and representing teams in high school, where my interests in technology and research began.
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
                <p>
                  I like sharing thoughts on research and applications on <a href="#" className="text-primary hover:underline">Twitter</a> and (occasionally) <a href="#" className="text-primary hover:underline">my blog</a>.
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
              <img src={profilePhoto} alt="Profile" className="w-full max-w-xs rounded-lg object-cover shadow-sm" />
              <a href="#resume" className="inline-flex items-center text-primary hover:underline font-medium text-sm">
                📄 Resume/CV
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 mt-16 border-t border-border">
        <div className="text-center text-xs text-muted-foreground">
          © Copyright 2024 Your Name. Powered by React.
        </div>
      </footer>
    </div>;
};
export default Index;