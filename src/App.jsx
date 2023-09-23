import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Productive from "../components/Productive";
import Footer from "../components/Footer";

export default function App() {
  return (
    <article className="container">
      <Header />
      <Hero />
      <Productive />
      <Footer />
    </article>
  );
}
