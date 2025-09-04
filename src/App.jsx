import Footer from './components/Footer'
import Header from './components/Header'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {

  return (
    <div className=" bg-[#0a192f] text-gray-300 min-h-screen">
      <main>
        <Header />
        <Hero />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
