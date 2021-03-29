import { projects } from '../Projects.json'
import Project from './project'

export default function ProjectsContainer() {
    
    let allProjects = projects.map(project => (
      <Project name={project.name} key={project.id} img={project.img} shortdesc={project.short_description} longdesc={project.long_description} url={project.url} />  
    ))

    return (
        <div>
            <h1>projects</h1>
            {allProjects}
        </div>
    )
}