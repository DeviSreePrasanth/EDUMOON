// src/App.jsx
import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import AllPosts from "./pages/AllPosts";
import Browse from "./pages/Browse";
import Stats from "./pages/Stats";
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Browse/>
      <AllPosts/>
      <Stats/>
      
      <Footer/>
    </div>
  );
}

export default App;
