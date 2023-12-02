import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Experience from "./components/Experience"
import Home from "./components/Home"
import { NavBar } from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <ContactMe />
      <SocialLinks />
    </>
  )
}

export default App
