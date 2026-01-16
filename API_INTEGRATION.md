# API Integration Guide

## Overview

The application is now prepared for future API integration with a clean service layer architecture. All API calls are currently mocked but can be easily switched to real endpoints.

## Architecture

### Services Layer Structure

```
src/services/
├── apiClient.ts       - Axios-based HTTP client with interceptors
├── articleService.ts  - Article CRUD and interactions
├── authService.ts     - Authentication and user management
├── commentService.ts  - Comment operations
└── index.ts          - Central exports
```

### Key Features

✅ **Singleton Pattern** - Each service is a single instance  
✅ **Type Safety** - Full TypeScript support  
✅ **Error Handling** - Global error interceptors  
✅ **Auto Authentication** - JWT tokens automatically included  
✅ **Mock-First** - All services work with mock data now  
✅ **Clean Code** - Separation of concerns, DRY principles  

## Using Services

### In Components

```typescript
import { articleService } from "@/services";
import { useEffect, useState } from "react";

function MyComponent() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await articleService.getArticles();
        setArticles(response.articles);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    
    fetchData();
  }, []);
  
  return <div>{/* render articles */}</div>;
}
```

## Migration to Real API

### Step 1: Configure Environment

Update `.env` file:
```env
VITE_API_URL=https://api.yourbackend.com/v1
```

### Step 2: Update Services

In each service file (e.g., `articleService.ts`):

1. Find the method you want to enable
2. Uncomment the API call line
3. Comment out or remove the mock implementation

**Before:**
```typescript
async getArticles(): Promise<ArticleResponse> {
  // return await apiClient.get<ArticleResponse>(this.endpoint);
  return Promise.resolve({ articles: mockArticles, ... });
}
```

**After:**
```typescript
async getArticles(): Promise<ArticleResponse> {
  return await apiClient.get<ArticleResponse>(this.endpoint);
}
```

### Step 3: Test Each Endpoint

Test endpoints one by one to ensure they work correctly.

## Available Services

### Article Service

- `getArticles(params?)` - Fetch articles with filters
- `getArticleById(id)` - Get single article
- `createArticle(data)` - Create new article
- `updateArticle(data)` - Update existing article
- `deleteArticle(id)` - Delete article
- `toggleLike(id)` - Like/unlike article
- `toggleBookmark(id)` - Bookmark/unbookmark
- `reportArticle(id, reason)` - Report article

### Auth Service

- `login(credentials)` - User login
- `register(data)` - User registration
- `logout()` - User logout
- `getCurrentUser()` - Get logged-in user
- `updateProfile(data)` - Update user profile
- `changePassword(old, new)` - Change password
- `requestPasswordReset(email)` - Request reset link
- `resetPassword(token, password)` - Reset with token

### Comment Service

- `getCommentsByArticle(articleId)` - Get all comments
- `createComment(data)` - Post new comment
- `updateComment(id, data)` - Edit comment
- `deleteComment(id)` - Delete comment
- `toggleLike(id)` - Like/unlike comment

## Configuration

### API Client Settings

Located in `src/services/apiClient.ts`:

- **Base URL**: From `VITE_API_URL` environment variable
- **Timeout**: 30 seconds (configurable in `constants.ts`)
- **Headers**: `Content-Type: application/json`
- **Auth**: Bearer token from localStorage

### Constants

Update in `src/lib/constants.ts`:

```typescript
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
export const API_TIMEOUT = 30000;
export const AUTH_TOKEN_KEY = "truthtrack_auth_token";
```

## Error Handling

### Global Errors

The API client handles:
- **401 Unauthorized** → Automatic logout and redirect to login
- **Network errors** → Logged to console
- **Timeout errors** → Rejected promise

### Component-Level Errors

```typescript
try {
  await articleService.createArticle(data);
  toast.success("Success!");
} catch (error) {
  if (error.response?.status === 400) {
    toast.error("Invalid data");
  } else if (error.response?.status === 403) {
    toast.error("Permission denied");
  } else {
    toast.error("Something went wrong");
  }
}
```

## Best Practices

1. ✅ Always import from `@/services` index
2. ✅ Handle errors in components, not services
3. ✅ Use try-catch for all service calls
4. ✅ Show loading states during async operations
5. ✅ Display user-friendly error messages
6. ✅ Log errors for debugging
7. ✅ Keep service methods pure and focused

## Testing

When backend is ready:

```bash
# Update environment
echo "VITE_API_URL=https://api.example.com" > .env

# Test the app
npm run dev

# Build for production
npm run build
```

## Current Status

🟡 **All services are mocked** - Ready for API integration  
✅ **Structure complete** - Service layer fully implemented  
✅ **Components updated** - Using service methods  
✅ **Types defined** - TypeScript interfaces ready  
🔄 **Waiting for backend** - Uncomment API calls when ready  

## Support

For questions about the service layer:
- Check `src/services/README.md`
- Review individual service files
- See example usage in `ArticlePage.tsx`
