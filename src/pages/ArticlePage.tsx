import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Flag,
  User,
  Send,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CredibilityBadge, CredibilityLevel } from "@/components/CredibilityBadge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

// Mock article data
const articleData = {
  id: "1",
  title: "Global Climate Summit Reaches Historic Agreement on Emissions",
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
  credibility: "verified" as CredibilityLevel,
  credibilityScore: 98,
  readTime: "8 min read",
  views: 45200,
  comments: 342,
  likes: 1250,
  publishedAt: "January 12, 2026",
};

const comments = [
  {
    id: "1",
    author: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50",
    content: "This is incredible news! Finally some real action on climate change.",
    likes: 45,
    time: "2 hours ago",
  },
  {
    id: "2",
    author: "Emily Watson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50",
    content: "I hope countries actually follow through on their commitments this time.",
    likes: 32,
    time: "3 hours ago",
  },
  {
    id: "3",
    author: "David Park",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50",
    content: "The economic implications are concerning, but we need to act now.",
    likes: 18,
    time: "4 hours ago",
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleComment = () => {
    if (!isAuthenticated) {
      toast.error("Please login to comment");
      return;
    }
    if (newComment.trim()) {
      toast.success("Comment posted successfully!");
      setNewComment("");
    }
  };

  const handleLike = () => {
    if (!isAuthenticated) {
      toast.error("Please login to like articles");
      return;
    }
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Like removed" : "Article liked!");
  };

  const handleBookmark = () => {
    if (!isAuthenticated) {
      toast.error("Please login to bookmark articles");
      return;
    }
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? "Bookmark removed" : "Article bookmarked!");
  };

  const handleReport = () => {
    if (!isAuthenticated) {
      toast.error("Please login to report articles");
      return;
    }
    toast.success("Article reported. Our team will review it.");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/feed"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Feed
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Category and Credibility */}
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent">
                {articleData.category}
              </span>
              <CredibilityBadge
                level={articleData.credibility}
                score={articleData.credibilityScore}
                showLabel
              />
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {articleData.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <img
                  src={articleData.authorAvatar}
                  alt={articleData.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{articleData.author}</p>
                  <p className="text-xs">{articleData.organization}</p>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {articleData.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {articleData.views.toLocaleString()} views
              </span>
              <span>{articleData.publishedAt}</span>
            </div>

            {/* Credibility Score Bar */}
            <div className="bg-card border border-border rounded-xl p-4 mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">AI Credibility Score</span>
                <span className="text-2xl font-bold text-verified">
                  {articleData.credibilityScore}%
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${articleData.credibilityScore}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-verified to-emerald-400 rounded-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                This article has been verified by our AI system and cross-referenced with multiple reliable sources.
              </p>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl overflow-hidden mb-8"
          >
            <img
              src={articleData.image}
              alt={articleData.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: articleData.content }}
          />

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 py-6 border-t border-b border-border mb-8">
            <Button
              variant={isLiked ? "default" : "outline"}
              onClick={handleLike}
              className="gap-2"
            >
              <ThumbsUp className="h-4 w-4" />
              {articleData.likes + (isLiked ? 1 : 0)}
            </Button>
            <Button variant="outline" onClick={handleShare} className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button
              variant={isBookmarked ? "default" : "outline"}
              onClick={handleBookmark}
              className="gap-2"
            >
              <Bookmark className="h-4 w-4" />
              {isBookmarked ? "Saved" : "Save"}
            </Button>
            <Button variant="ghost" onClick={handleReport} className="gap-2 text-destructive">
              <Flag className="h-4 w-4" />
              Report
            </Button>
          </div>

          {/* Comments Section */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              Comments ({comments.length})
            </h2>

            {/* Add Comment */}
            <div className="mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <Textarea
                    placeholder={isAuthenticated ? "Write a comment..." : "Login to comment..."}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="mb-2 min-h-[100px]"
                    disabled={!isAuthenticated}
                  />
                  <Button onClick={handleComment} disabled={!isAuthenticated} className="gap-2">
                    <Send className="h-4 w-4" />
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4"
                >
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{comment.author}</span>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <p className="text-muted-foreground mb-2">{comment.content}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="h-3.5 w-3.5" />
                        {comment.likes}
                      </button>
                      <button className="text-muted-foreground hover:text-foreground">Reply</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
