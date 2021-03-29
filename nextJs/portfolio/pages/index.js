import Header from './partials/Header'
import About from './about'
import ProjectsContainer from './projectscontainer'
import RecommendationsContainer from './recommendationscontainer'

export default function Home() {
  return (
    <div className="components-container">
      <Header />
      <div className="non-partials-container">
        <About />
        <ProjectsContainer />
        <RecommendationsContainer />
      </div>
    </div>
  )
}
