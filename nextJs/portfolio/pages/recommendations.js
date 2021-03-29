export default function Recommendation(props) {
    return (
        <div className="rec">
            <div className="rec-img">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="rec-details">
                <h4>{props.name}</h4>
                <h5>{props.title}</h5>
                <p>{props.rec}</p>
            </div>
        </div>
    )
}

// /Users/whitneykoslik/Desktop/portfolio/wkoslik.github.io/nextJs/portfolio/pages/recommendations.js