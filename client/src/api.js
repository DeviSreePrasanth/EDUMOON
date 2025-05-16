const VITE_API_URL = import.meta.env.VITE_API_URL;

export const fetchPosts = async () => {
  const response = await fetch(`${VITE_API_URL}/api/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
