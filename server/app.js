require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const { INSTAGRAM_USER_ID, ACCESS_TOKEN } = process.env;

app.get("/", (req, res) => {
  res.send("Hello Server!");
});
app.get("/api/posts", async (req, res) => {
  try {
    let url = `https://graph.facebook.com/v19.0/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`;

    const allPosts = [];
    while (url) {
      const response = await fetch(url); // ✅ native fetch works here
      const data = await response.json();
      allPosts.push(...data.data);
      url = data.paging?.next || null;
    }

    res.json({ posts: allPosts });
  } catch (err) {
    console.error("Error fetching posts", err);
    res.status(500).json({ error: "Failed to fetch Instagram posts" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
