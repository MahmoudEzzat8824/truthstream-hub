import { CredibilityLevel } from "@/components/CredibilityBadge";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  organization?: string;
  image: string;
  category: string;
  credibility: CredibilityLevel;
  credibilityScore: number;
  readTime: string;
  views: number;
  comments: number;
  likes: number;
  publishedAt: string;
  featured?: boolean;
}

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Global Climate Summit Reaches Historic Agreement on Emissions",
    excerpt: "World leaders have agreed on unprecedented measures to reduce carbon emissions by 60% before 2040, marking a pivotal moment in the fight against climate change.",
    content: `
      <p>World leaders have agreed on unprecedented measures to reduce carbon emissions by 60% before 2040, marking a pivotal moment in the fight against climate change.</p>
      
      <p>The agreement, reached after two weeks of intense negotiations in Geneva, represents the most ambitious climate action plan ever adopted by the international community. Representatives from 195 countries signed the accord, which includes binding commitments and enforcement mechanisms.</p>
      
      <h2>Key Points of the Agreement</h2>
      
      <p>The new framework establishes several groundbreaking provisions:</p>
      
      <ul>
        <li>A 60% reduction in global carbon emissions by 2040</li>
        <li>$500 billion annual fund for developing nations</li>
        <li>Phase-out of coal power by 2035 in developed nations</li>
        <li>Mandatory emissions reporting for all major corporations</li>
      </ul>
      
      <p>"This is a watershed moment for humanity," said UN Secretary-General in a press conference following the signing ceremony. "For the first time, we have a truly global commitment to address the climate crisis with the urgency it demands."</p>
      
      <h2>Implementation Challenges</h2>
      
      <p>While the agreement has been widely praised, experts note that implementation will be challenging. Several major industrial nations have expressed concerns about the economic impact of such rapid decarbonization.</p>
      
      <p>However, environmental groups and climate scientists have largely welcomed the accord as a necessary step toward limiting global warming to 1.5 degrees Celsius above pre-industrial levels.</p>
    `,
    author: "Sarah Mitchell",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    organization: "Climate Watch Network",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=1200",
    category: "Environment",
    credibility: "verified",
    credibilityScore: 98,
    readTime: "8 min read",
    views: 45200,
    comments: 342,
    likes: 1250,
    publishedAt: "January 12, 2026",
    featured: true,
  },
  {
    id: "2",
    title: "Tech Giants Face New Regulations Over Data Privacy",
    excerpt: "Major technology companies will be required to implement stricter data protection measures under new legislation.",
    content: `
      <p>Major technology companies will be required to implement stricter data protection measures under new legislation passed this week.</p>
      
      <p>The sweeping reforms, which affect all companies handling personal data of EU citizens, mandate transparent data collection practices and give users greater control over their information.</p>
      
      <h2>What's Changing</h2>
      
      <p>The new regulations include:</p>
      
      <ul>
        <li>Mandatory opt-in for data collection</li>
        <li>Right to delete all personal data</li>
        <li>Real-time data breach notifications</li>
        <li>Penalties up to 4% of global revenue for violations</li>
      </ul>
      
      <p>Industry leaders have expressed mixed reactions, with some praising the move while others warn of compliance costs and implementation challenges.</p>
      
      <p>"User privacy must be the top priority in the digital age," said a spokesperson for the regulatory body. "These measures ensure that companies put users first."</p>
    `,
    author: "James Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    organization: "Tech Insider",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    category: "Technology",
    credibility: "verified",
    credibilityScore: 95,
    readTime: "5 min read",
    views: 28100,
    comments: 156,
    likes: 892,
    publishedAt: "January 13, 2026",
  },
  {
    id: "3",
    title: "Breakthrough in Renewable Energy Storage Technology",
    excerpt: "Scientists announce a major advancement in battery technology that could revolutionize solar and wind power storage capabilities.",
    content: `
      <p>A team of researchers has developed a revolutionary battery technology that could dramatically improve energy storage for renewable sources.</p>
      
      <p>The new lithium-silicon batteries can store 50% more energy than conventional lithium-ion batteries while costing 30% less to produce.</p>
      
      <h2>Technical Innovation</h2>
      
      <p>The breakthrough involves a novel electrode design that prevents degradation and extends battery life to over 10,000 charge cycles.</p>
      
      <p>Key advantages include:</p>
      
      <ul>
        <li>50% higher energy density</li>
        <li>30% lower production costs</li>
        <li>Extended lifespan to 15+ years</li>
        <li>Faster charging capabilities</li>
      </ul>
      
      <p>"This could be the key to making renewable energy truly viable at scale," said Dr. Emily Watson, lead researcher on the project.</p>
      
      <p>Commercial production is expected to begin within 18 months, with major energy companies already expressing interest.</p>
    `,
    author: "Dr. Emily Watson",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    organization: "Science Daily",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
    category: "Science",
    credibility: "verified",
    credibilityScore: 97,
    readTime: "6 min read",
    views: 31500,
    comments: 89,
    likes: 756,
    publishedAt: "January 14, 2026",
  },
  {
    id: "4",
    title: "Economic Report Claims Unprecedented Growth Figures",
    excerpt: "Recent claims about economic growth figures are under scrutiny as experts question the methodology used in the analysis.",
    content: `
      <p>A recently released economic report claiming record-breaking growth has drawn criticism from economists who question its methodology.</p>
      
      <p>The report, published by an independent think tank, suggests GDP growth of 8.5% - significantly higher than official government figures of 3.2%.</p>
      
      <h2>Methodology Concerns</h2>
      
      <p>Several prominent economists have raised concerns about:</p>
      
      <ul>
        <li>Selective data sampling</li>
        <li>Unverified primary sources</li>
        <li>Lack of peer review</li>
        <li>Potential conflicts of interest</li>
      </ul>
      
      <p>"The numbers simply don't add up when compared to established economic indicators," stated a professor of economics at a major university.</p>
      
      <p>The organization behind the report has defended its findings but has yet to release its raw data for independent verification.</p>
      
      <p>Financial markets have largely ignored the report, with analysts recommending caution until the claims can be properly validated.</p>
    `,
    author: "Michael Rivera",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200",
    category: "Economy",
    credibility: "questionable",
    credibilityScore: 45,
    readTime: "4 min read",
    views: 18700,
    comments: 234,
    likes: 423,
    publishedAt: "January 15, 2026",
  },
];

export function getArticleById(id: string): Article | undefined {
  return mockArticles.find(article => article.id === id);
}

export function getAllArticles(): Article[] {
  return mockArticles;
}
