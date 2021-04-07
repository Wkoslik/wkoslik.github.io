import Header from './partials/Header'
import About from './about'
import ProjectsContainer from './projectscontainer'
import RecommendationsContainer from './recommendationscontainer'
import Footer from './partials/Footer'
import Nav from './partials/Nav'
import Contact from './contact'

export default function Home() {
  return (
    <div className="components-container">
      <Nav />
      <Header />
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
