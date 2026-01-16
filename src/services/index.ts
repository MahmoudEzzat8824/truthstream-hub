/**
 * Central export point for all services
 * Import services from here to maintain clean code structure
 */

export { apiClient } from "./apiClient";
export { articleService } from "./articleService";
export { authService } from "./authService";
export { commentService } from "./commentService";

// Re-export types for convenience
export type { Article } from "@/lib/mockArticles";
