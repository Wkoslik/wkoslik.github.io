import Header from './partials/Header'
import About from './about'
import ProjectsContainer from './projectscontainer'
import RecommendationsContainer from './recommendationscontainer'
import Footer from './partials/Footer'
import Nav from './partials/Nav'
import Contact from './contact'
import Hamburger from './partials/Menu'

export default function Home() {
  return (
    <div className="components-container">
    <Hamburger />
      <Nav />
      <div className="non-partials-container">
        <About />
        <ProjectsContainer />
        <RecommendationsContainer />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
