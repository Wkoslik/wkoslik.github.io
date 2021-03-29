export default function Recommendation(props) {
    return (
        <div className="rec">
            <div className="rec-details">
                <p>{props.rec}</p>
            </div>
            <div className="rec-img">
                <img src={props.img} alt={props.name} />
                <div className="name-title">
                    <h4>{props.name}</h4>
                    <h5>{props.title}</h5>
                    <h5>{props.date}</h5>
                </div>
            </div>
        </div>
    )
}

// /Users/whitneykoslik/Desktop/portfolio/wkoslik.github.io/nextJs/portfolio/pages/recommendations.js