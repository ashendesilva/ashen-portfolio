// page.js

"use client";
// No need to import useEffect anymore
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

export default function Page() {
  // The entire useEffect hook has been removed.
  return (
    <main className="scroll-smooth">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="work"><Work /></section>
      <section id="contact"><Contact /></section>
    </main>

  );
}