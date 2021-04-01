import { projects } from '../Projects.json'
import Project from './project'

export default function ProjectsContainer() {

    let allProjects = projects.map(project => (
        <Project name={project.name} key={project.id} img={project.img} shortdesc={project.short_description} longdesc={project.long_description} url={project.url} live={project.live}/>
    ))

    return (
        <div id="projects">
            <h2>Super Awesome <span className="turn-pink">(and probably punny)</span> Projects</h2>
            <div className="all-projects">
                {allProjects}
            </div>
        </div>
    )
}