import { apiClient } from "./apiClient";

/**
 * Comment Service - Handles all comment-related API calls
 */

interface Comment {
  id: string;
  articleId: string;
  author: string;
  authorId: string;
  avatar?: string;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

interface CreateCommentData {
  articleId: string;
  content: string;
}

interface UpdateCommentData {
  content: string;
}

class CommentService {
  private readonly endpoint = "/comments";

  /**
   * Get comments for an article
   * TODO: Replace with actual API call when backend is ready
   */
  async getCommentsByArticle(articleId: string): Promise<Comment[]> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.get<Comment[]>(`/articles/${articleId}/comments`);

      // Mock implementation for now
      const mockComments: Comment[] = [
        {
          id: "1",
          articleId,
          author: "Michael Chen",
          authorId: "user-1",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50",
          content: "This is incredible news! Finally some real action on climate change.",
          likes: 45,
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: "2",
          articleId,
          author: "Emily Watson",
          authorId: "user-2",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50",
          content: "I hope countries actually follow through on their commitments this time.",
          likes: 32,
          createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        },
      ];
      return Promise.resolve(mockComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  }

  /**
   * Create a new comment
   * TODO: Replace with actual API call when backend is ready
   */
  async createComment(data: CreateCommentData): Promise<Comment> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.post<Comment>(this.endpoint, data);

      // Mock implementation for now
      console.log("Creating comment:", data);
      throw new Error("Comment creation not available - API not connected");
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    }
  }

  /**
   * Update a comment
   * TODO: Replace with actual API call when backend is ready
   */
  async updateComment(id: string, data: UpdateCommentData): Promise<Comment> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.put<Comment>(`${this.endpoint}/${id}`, data);

      // Mock implementation for now
      console.log("Updating comment:", id, data);
      throw new Error("Comment update not available - API not connected");
    } catch (error) {
      console.error("Error updating comment:", error);
      throw error;
    }
  }

  /**
   * Delete a comment
   * TODO: Replace with actual API call when backend is ready
   */
  async deleteComment(id: string): Promise<void> {
    try {
      // Uncomment when API is ready:
      // await apiClient.delete(`${this.endpoint}/${id}`);

      // Mock implementation for now
      console.log("Deleting comment:", id);
      throw new Error("Comment deletion not available - API not connected");
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw error;
    }
  }

  /**
   * Like/unlike a comment
   * TODO: Replace with actual API call when backend is ready
   */
  async toggleLike(id: string): Promise<{ liked: boolean; likes: number }> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.post<{ liked: boolean; likes: number }>(`${this.endpoint}/${id}/like`);

      // Mock implementation for now
      return Promise.resolve({ liked: true, likes: 10 });
    } catch (error) {
      console.error("Error toggling comment like:", error);
      throw error;
    }
  }
}

// Export singleton instance
export const commentService = new CommentService();
