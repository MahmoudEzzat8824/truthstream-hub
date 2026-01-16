# Services Layer

This directory contains all API service files following clean code principles and separation of concerns.

## Structure

```
services/
├── apiClient.ts          # Base API client with axios configuration
├── articleService.ts     # Article-related API calls
├── authService.ts        # Authentication API calls
├── commentService.ts     # Comment-related API calls
└── index.ts             # Central export point
```

## Usage

### Importing Services

Always import from the central index file:

```typescript
import { articleService, authService, commentService } from "@/services";
```

### Example: Fetching Articles

```typescript
import { articleService } from "@/services";

const fetchArticles = async () => {
  try {
    const response = await articleService.getArticles({
      category: "Technology",
      page: 1,
      limit: 10,
    });
    console.log(response.articles);
  } catch (error) {
    console.error("Failed to fetch articles:", error);
  }
};
```

### Example: User Login

```typescript
import { authService } from "@/services";

const handleLogin = async (email: string, password: string) => {
  try {
    const response = await authService.login({ email, password });
    console.log("Logged in user:", response.user);
  } catch (error) {
    console.error("Login failed:", error);
  }
};
```

## API Client Configuration

The `apiClient.ts` provides:

- **Automatic token injection** - JWT tokens are automatically added to requests
- **Error handling** - Global error handling and 401 redirects
- **Type safety** - Full TypeScript support
- **Interceptors** - Request/response interceptors for logging, auth, etc.

## Current State

🚧 **All services are currently using mock data**

Each service method has the actual API call commented out with a `TODO` marker. When the backend is ready:

1. Uncomment the actual API call
2. Remove or comment out the mock implementation
3. Update the API endpoint URLs in `constants.ts`

## Environment Variables

Configure these in your `.env` file:

```env
VITE_API_URL=http://localhost:3000/api
```

## Adding New Services

To add a new service:

1. Create a new file: `src/services/newService.ts`
2. Follow the existing service pattern
3. Export it from `src/services/index.ts`
4. Use dependency injection where needed

Example template:

```typescript
import { apiClient } from "./apiClient";

class NewService {
  private readonly endpoint = "/new-endpoint";

  async getItems(): Promise<Item[]> {
    try {
      // TODO: Uncomment when API is ready
      // return await apiClient.get<Item[]>(this.endpoint);

      // Mock implementation
      return Promise.resolve([]);
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
  }
}

export const newService = new NewService();
```

## Error Handling

Services throw errors that should be caught in components:

```typescript
try {
  await articleService.createArticle(data);
  toast.success("Article created!");
} catch (error) {
  toast.error("Failed to create article");
  console.error(error);
}
```

## Best Practices

1. ✅ Always use service methods instead of direct API calls
2. ✅ Handle errors in components, not in services
3. ✅ Use TypeScript interfaces for all data structures
4. ✅ Keep service methods focused and single-purpose
5. ✅ Add proper JSDoc comments for all methods
6. ✅ Use async/await instead of promises
7. ✅ Mock data should match actual API response structure

## Migration Checklist

When backend is ready:

- [ ] Update `VITE_API_URL` in `.env`
- [ ] Uncomment API calls in all service files
- [ ] Remove mock implementations
- [ ] Test all endpoints
- [ ] Update error messages
- [ ] Add proper loading states in components
- [ ] Implement retry logic if needed
- [ ] Add request caching where appropriate
