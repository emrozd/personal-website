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
      <main className="max-w-4xl mx-auto px-6 pb-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-light text-foreground mb-2">Emre Ozdemir</h1>
              <a href="mailto:emreozdemir@sabanciuniv.edu" className="text-muted-foreground hover:text-primary transition-colors">
                emreozdemir@sabanciuniv.edu
              </a>
            </div>
            <Button asChild variant="outline" size="sm">
              <a href="/resume.pdf" download="Emre_Ozdemir_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-6 pb-2 border-b border-border">Professional Experience</h2>
          
          <div className="space-y-8">
            {/* Zalando */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-medium text-foreground">Pricing Analytics Team Lead</h3>
                  <p className="text-muted-foreground">Zalando, Berlin</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Dec 2019 – Present</span>
              </div>
              <p className="text-foreground mb-3">
                I built and continue to lead a high-performing team of analysts (and indirectly, applied scientists) working primarily in the pricing domain at Lounge by Zalando, where I remain hands-on across strategic and operational activities. Beyond supporting commercial steering, I'm responsible for co-owning the strategic roadmap and leading various pricing initiatives, most important of which is the development of a demand-based price optimization product.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-foreground">
                <li>Established the data foundation for pricing, aligning with data-producing teams, building curated data pipelines, and developing key metrics and documentation, enhancing data consistency and accessibility.</li>
                <li>Developed and maintained dashboards and reports to track business performance, provide insights into commercial initiatives, and identify new growth opportunities for the business and the price optimization product.</li>
                <li>Owned the roadmap and evaluation of the price optimization product, which includes determining the milestones, evaluation metrics and criteria as well as designing, running, monitoring and analyzing pricing experiments.</li>
              </ul>
            </div>

            {/* SnA Consulting */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-medium text-foreground">Consultant</h3>
                  <p className="text-muted-foreground">SnA Consulting, Istanbul</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Sep 2017 – Dec 2019</span>
              </div>
              <p className="text-foreground mb-3">
                Provided day-to-day analytics consulting support for major Telco in Turkey.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-foreground">
                <li>Built regression and decision tree models using SAS to predict churn, upsell & prepaid to postpaid switch potential of 30M subscribers, and oversaw the successful operational implementation from start to finish, generating $15M+ incremental revenue.</li>
                <li>Performed analyses on customer behavior, to develop better targeting strategies and to measure effectiveness of various marketing campaigns. Presented findings that helped guide the decision-making of management.</li>
                <li>Guided client teams and oversaw implementation of data mining techniques (including recommender systems, clustering, frequent path & association analyses) for a newly-developed streaming-analytics platform.</li>
              </ul>
            </div>

            {/* Nielsen */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-medium text-foreground">Senior Analyst</h3>
                  <p className="text-muted-foreground">Nielsen, Istanbul</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Oct 2014 – Jul 2017</span>
              </div>
              <p className="text-foreground mb-3">
                Provided actionable insights and recommendations on marketing strategies to major FMCG companies operating in the EMEA region through analysis of Nielsen data in SAS.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-foreground">
                <li>Performed analyses to assess in-store activities, sales concentration along distribution channels and to inform pricing and assortment strategies.</li>
                <li>Refactored code and standardized analytics solutions, reducing the time required to complete analytics projects by as much as 50%. Presented to management and guided Analytic Consulting teams in Poland and Turkey to successful implementation.</li>
                <li>Coached team members and oversaw their work and communication with clients to ensure high-quality output.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-6 pb-2 border-b border-border">Education</h2>
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-medium text-foreground">Sabancı University, Istanbul</h3>
                <p className="text-muted-foreground">BS in Industrial Engineering</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">2009 – 2014</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-foreground">
              <li>GPA: 3.48/4.00</li>
              <li>66% Merit Scholarship</li>
              <li>Deloitte Education Foundation Scholarship (monthly stipends)</li>
            </ul>
          </div>
        </section>

        {/* Languages & Interests */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4 pb-2 border-b border-border">Languages</h2>
            <p className="text-foreground">
              Turkish (Native), English (Fluent), German (Intermediate)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4 pb-2 border-b border-border">Interests</h2>
            <p className="text-foreground">
              Playing soccer, sailing, rowing. Reading, writing about, and discussing the intersection of history, politics and international affairs.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-border">
        <div className="text-center text-xs text-muted-foreground">
          © Copyright 2025 Emre Ozdemir. Powered by React.
        </div>
      </footer>
    </div>
  );
};

export default Resume;