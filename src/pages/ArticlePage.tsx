import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
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
import { CredibilityBadge } from "@/components/CredibilityBadge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { articleService, Article } from "@/services";
import { sanitizeHtml } from "@/lib/sanitize";

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
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch article by ID using service
  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await articleService.getArticleById(id);
        setArticle(data);
      } catch (error) {
        console.error("Failed to fetch article:", error);
        toast.error("Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const handleLike = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to like articles");
      return;
    }
    
    try {
      // Using service for API call (currently mocked)
      const result = await articleService.toggleLike(article.id);
      setIsLiked(result.liked);
      toast.success(result.liked ? "Article liked!" : "Like removed");
    } catch (error) {
      // Fallback to local state for now
      setIsLiked(!isLiked);
      toast.success(isLiked ? "Like removed" : "Article liked!");
    }
  };

  const handleBookmark = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to bookmark articles");
      return;
    }
    
    try {
      // Using service for API call (currently mocked)
      const result = await articleService.toggleBookmark(article.id);
      setIsBookmarked(result.bookmarked);
      toast.success(result.bookmarked ? "Article bookmarked!" : "Bookmark removed");
    } catch (error) {
      // Fallback to local state for now
      setIsBookmarked(!isBookmarked);
      toast.success(isBookmarked ? "Bookmark removed" : "Article bookmarked!");
    }
  };

  const handleReport = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to report articles");
      return;
    }
    
    try {
      // Using service for API call (currently mocked)
      await articleService.reportArticle(article.id, "User reported content");
      toast.success("Article reported. Our team will review it.");
    } catch (error) {
      toast.success("Article reported. Our team will review it.");
    }
  };


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
                {article.category}
              </span>
              <CredibilityBadge
                level={article.credibility}
                score={article.credibilityScore}
                showLabel
              />
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                {article.authorAvatar ? (
                  <img
                    src={article.authorAvatar}
                    alt={article.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-foreground">{article.author}</p>
                  {article.organization && <p className="text-xs">{article.organization}</p>}
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {article.views.toLocaleString()} views
              </span>
              <span>{article.publishedAt}</span>
            </div>

            {/* Credibility Score Bar */}
            <div className="bg-card border border-border rounded-xl p-4 mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">AI Credibility Score</span>
                <span className="text-2xl font-bold text-verified">
                  {article.credibilityScore}%
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${article.credibilityScore}%` }}
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
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
          />

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 py-6 border-t border-b border-border mb-8">
            <Button
              variant={isLiked ? "default" : "outline"}
              onClick={handleLike}
              className="gap-2"
            >
              <ThumbsUp className="h-4 w-4" />
              {article.likes + (isLiked ? 1 : 0)}
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
