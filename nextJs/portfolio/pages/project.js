export default function Project(props) {
    return (
        <div className="project">
            <div className="project-image">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="project-details">
                <h3 className="turn-pink">{props.name}</h3>
                <p className="shortdesc">{props.shortdesc}</p>
                <a href={props.url} className="url" target="_blank" className="demo btn hover">{props.live}</a>
            </div>
        </div>
    )
}