import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { recommendations } from '../Recommendations.json'
import Recommendation from './recommendations.js'

export default function RecommendationsContainer() {
    let allRecs = recommendations.map(rec => (
        <Recommendation name={rec.name} img={rec.img} title={rec.title} date={rec.date} rec={rec.recommendation} linkedin={rec.linkedin} key={rec.id} />
    ))

    return (
        <div id="recommendations">
            <h2>What all the <span className="turn-pink">cool kids</span> are saying...</h2>
            <Carousel autoPlay showThumbs={false} infiniteLoop={true} interval={4000}>
                {allRecs}
            </Carousel>
        </div>
    )
}