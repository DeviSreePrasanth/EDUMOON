require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const { ACCESS_TOKEN } = process.env;

// Validate environment variables
if (!ACCESS_TOKEN) {
  console.error("Missing ACCESS_TOKEN");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.get("/api/posts", async (req, res) => {
  try {
    let url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=${ACCESS_TOKEN}&limit=33`;

    const allPosts = [];
    while (url) {
      const response = await fetch(url);
      
      // Check if response is OK
      if (!response.ok) {
        const text = await response.text();
        console.error("Non-OK response:", {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: text,
        });
        throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
      }

      // Attempt to parse JSON
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        const text = await response.text();
        console.error("JSON parsing error:", {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: text,
        });
        throw new Error(`Failed to parse JSON: ${jsonError.message}`);
      }

      // Check for API errors in the response
      if (data.error) {
        throw new Error(`Instagram API error: ${data.error.message}`);
      }

      allPosts.push(...data.data);
      url = data.paging?.next || null;
    }

    res.json({ posts: allPosts });
  } catch (err) {
    console.error("Error fetching posts:", err.message, err.stack);
    res.status(500).json({ error: `Failed to fetch Instagram posts: ${err.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});