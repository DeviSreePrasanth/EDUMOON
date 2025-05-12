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
      const response = await fetch(url); // ✅ native fetch works here
      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error?.message || `Instagram API error: ${response.status} ${response.statusText}`);
      }
      allPosts.push(...data.data);
      url = data.paging?.next || null;
    }

    res.json({ posts: allPosts });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Failed to fetch Instagram posts" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});