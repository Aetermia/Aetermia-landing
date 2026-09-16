import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Solutions } from './components/Solutions'
import { Process } from './components/Process'
import { Stats } from './components/Stats'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <Services />
        <Solutions />
        <Process />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App