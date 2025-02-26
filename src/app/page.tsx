
import FloatingNav from "./components/floating-nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
    </main>
  )
}

