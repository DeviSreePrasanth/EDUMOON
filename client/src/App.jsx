// src/App.jsx
import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import AllPosts from "./pages/AllPosts";
import Browse from "./pages/Browse";
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Browse/>
      <AllPosts/>
      <Footer/>
    </div>
  );
}

export default App;
