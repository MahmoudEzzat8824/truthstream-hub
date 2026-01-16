import { apiClient } from "./apiClient";
import { Article, mockArticles, getArticleById as getMockArticle } from "@/lib/mockArticles";

/**
 * Article Service - Handles all article-related API calls
 */

interface GetArticlesParams {
  category?: string;
  credibility?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
}

interface ArticleResponse {
  articles: Article[];
  total: number;
  page: number;
  totalPages: number;
}

interface CreateArticleData {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image?: string;
}

interface UpdateArticleData extends Partial<CreateArticleData> {
  id: string;
}

class ArticleService {
  private readonly endpoint = "/articles";

  /**
   * Get all articles with optional filters
   * TODO: Replace with actual API call when backend is ready
   */
  async getArticles(params?: GetArticlesParams): Promise<ArticleResponse> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.get<ArticleResponse>(this.endpoint, { params });

      // Mock implementation for now
      return Promise.resolve({
        articles: mockArticles,
        total: mockArticles.length,
        page: params?.page || 1,
        totalPages: 1,
      });
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  }

  /**
   * Get a single article by ID
   * TODO: Replace with actual API call when backend is ready
   */
  async getArticleById(id: string): Promise<Article | null> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.get<Article>(`${this.endpoint}/${id}`);

      // Mock implementation for now
      const article = getMockArticle(id);
      return Promise.resolve(article || null);
    } catch (error) {
      console.error(`Error fetching article ${id}:`, error);
      throw error;
    }
  }

  /**
   * Create a new article
   * TODO: Replace with actual API call when backend is ready
   */
  async createArticle(data: CreateArticleData): Promise<Article> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.post<Article>(this.endpoint, data);

      // Mock implementation for now
      console.log("Creating article:", data);
      throw new Error("Article creation not available - API not connected");
    } catch (error) {
      console.error("Error creating article:", error);
      throw error;
    }
  }

  /**
   * Update an existing article
   * TODO: Replace with actual API call when backend is ready
   */
  async updateArticle(data: UpdateArticleData): Promise<Article> {
    try {
      // Uncomment when API is ready:
      // const { id, ...updateData } = data;
      // return await apiClient.put<Article>(`${this.endpoint}/${id}`, updateData);

      // Mock implementation for now
      console.log("Updating article:", data);
      throw new Error("Article update not available - API not connected");
    } catch (error) {
      console.error("Error updating article:", error);
      throw error;
    }
  }

  /**
   * Delete an article
   * TODO: Replace with actual API call when backend is ready
   */
  async deleteArticle(id: string): Promise<void> {
    try {
      // Uncomment when API is ready:
      // await apiClient.delete(`${this.endpoint}/${id}`);

      // Mock implementation for now
      console.log("Deleting article:", id);
      throw new Error("Article deletion not available - API not connected");
    } catch (error) {
      console.error("Error deleting article:", error);
      throw error;
    }
  }

  /**
   * Like/unlike an article
   * TODO: Replace with actual API call when backend is ready
   */
  async toggleLike(id: string): Promise<{ liked: boolean; likes: number }> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.post<{ liked: boolean; likes: number }>(`${this.endpoint}/${id}/like`);

      // Mock implementation for now
      return Promise.resolve({ liked: true, likes: 100 });
    } catch (error) {
      console.error("Error toggling like:", error);
      throw error;
    }
  }

  /**
   * Bookmark/unbookmark an article
   * TODO: Replace with actual API call when backend is ready
   */
  async toggleBookmark(id: string): Promise<{ bookmarked: boolean }> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.post<{ bookmarked: boolean }>(`${this.endpoint}/${id}/bookmark`);

      // Mock implementation for now
      return Promise.resolve({ bookmarked: true });
    } catch (error) {
      console.error("Error toggling bookmark:", error);
      throw error;
    }
  }

  /**
   * Report an article
   * TODO: Replace with actual API call when backend is ready
   */
  async reportArticle(id: string, reason: string): Promise<void> {
    try {
      // Uncomment when API is ready:
      // await apiClient.post(`${this.endpoint}/${id}/report`, { reason });

      // Mock implementation for now
      console.log("Reporting article:", id, reason);
      return Promise.resolve();
    } catch (error) {
      console.error("Error reporting article:", error);
      throw error;
    }
  }
}

// Export singleton instance
export const articleService = new ArticleService();
