import Header from './partials/Header'
import About from './about'
import ProjectsContainer from './projectscontainer'
import RecommendationsContainer from './recommendationscontainer'
import Footer from './partials/Footer'

export default function Home() {
  return (
    <div className="components-container">
      <Header />
      <div className="non-partials-container">
        <About />
        <ProjectsContainer />
        <RecommendationsContainer />
      </div>
      <Footer />
    </div>
  )
}
