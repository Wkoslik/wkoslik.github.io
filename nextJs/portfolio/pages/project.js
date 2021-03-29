export default function Project(props){
    return (
        <div className="project">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <p className="shortdesc">{props.shortdesc}</p>
        </div>
    )
}