import { apiClient } from "./apiClient";
import { User } from "@/contexts/AuthContext";
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from "@/lib/constants";

/**
 * Auth Service - Handles all authentication-related API calls
 */

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: "viewer" | "journalist" | "organization";
  organization?: string;
  licenseNumber?: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

class AuthService {
  private readonly endpoint = "/auth";

  /**
   * Login user
   * TODO: Replace with actual API call when backend is ready
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // Uncomment when API is ready:
      // const response = await apiClient.post<AuthResponse>(`${this.endpoint}/login`, credentials);
      // this.saveAuthData(response);
      // return response;

      // Mock implementation for now
      console.log("Login attempt:", credentials.email);
      throw new Error("API login not available - using mock authentication");
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  /**
   * Register new user
   * TODO: Replace with actual API call when backend is ready
   */
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      // Uncomment when API is ready:
      // const response = await apiClient.post<AuthResponse>(`${this.endpoint}/register`, data);
      // this.saveAuthData(response);
      // return response;

      // Mock implementation for now
      console.log("Register attempt:", data.email);
      throw new Error("API registration not available - using mock authentication");
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  }

  /**
   * Logout user
   * TODO: Replace with actual API call when backend is ready
   */
  async logout(): Promise<void> {
    try {
      // Uncomment when API is ready:
      // await apiClient.post(`${this.endpoint}/logout`);

      this.clearAuthData();
    } catch (error) {
      console.error("Error during logout:", error);
      this.clearAuthData(); // Clear data even if API call fails
    }
  }

  /**
   * Get current user profile
   * TODO: Replace with actual API call when backend is ready
   */
  async getCurrentUser(): Promise<User> {
    try {
      // Uncomment when API is ready:
      // return await apiClient.get<User>(`${this.endpoint}/me`);

      // Mock implementation - try to get from localStorage
      const userJson = localStorage.getItem(AUTH_USER_KEY);
      if (userJson) {
        return JSON.parse(userJson);
      }
      throw new Error("No user found");
    } catch (error) {
      console.error("Error fetching current user:", error);
      throw error;
    }
  }

  /**
   * Update user profile
   * TODO: Replace with actual API call when backend is ready
   */
  async updateProfile(data: Partial<User>): Promise<User> {
    try {
      // Uncomment when API is ready:
      // const updatedUser = await apiClient.put<User>(`${this.endpoint}/profile`, data);
      // localStorage.setItem(AUTH_USER_KEY, JSON.stringify(updatedUser));
      // return updatedUser;

      // Mock implementation for now
      console.log("Update profile:", data);
      throw new Error("Profile update not available - API not connected");
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  }

  /**
   * Change password
   * TODO: Replace with actual API call when backend is ready
   */
  async changePassword(oldPassword: string, newPassword: string): Promise<void> {
    try {
      // Uncomment when API is ready:
      // await apiClient.post(`${this.endpoint}/change-password`, {
      //   oldPassword,
      //   newPassword,
      // });

      // Mock implementation for now
      console.log("Change password request");
      throw new Error("Password change not available - API not connected");
    } catch (error) {
      console.error("Error changing password:", error);
      throw error;
    }
  }

  /**
   * Request password reset
   * TODO: Replace with actual API call when backend is ready
   */
  async requestPasswordReset(email: string): Promise<void> {
    try {
      // Uncomment when API is ready:
      // await apiClient.post(`${this.endpoint}/forgot-password`, { email });

      // Mock implementation for now
      console.log("Password reset request for:", email);
      return Promise.resolve();
    } catch (error) {
      console.error("Error requesting password reset:", error);
      throw error;
    }
  }

  /**
   * Reset password with token
   * TODO: Replace with actual API call when backend is ready
   */
  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      // Uncomment when API is ready:
      // await apiClient.post(`${this.endpoint}/reset-password`, {
      //   token,
      //   newPassword,
      // });

      // Mock implementation for now
      console.log("Reset password with token:", token);
      throw new Error("Password reset not available - API not connected");
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  }

  /**
   * Save authentication data to localStorage
   */
  private saveAuthData(authResponse: AuthResponse): void {
    localStorage.setItem(AUTH_TOKEN_KEY, authResponse.token);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authResponse.user));
  }

  /**
   * Clear authentication data from localStorage
   */
  private clearAuthData(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  }

  /**
   * Get stored auth token
   */
  getToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }
}

// Export singleton instance
export const authService = new AuthService();
