export default function PortfolioCards(props) {
    return (
            <figure>
                <h3 className="app-title">{props.title}</h3>
                <img className="portfolio-img"src={props.image} alt="screenshot of App"/>
                <figcaption><a className="links"href={props.appLink}>View App</a></figcaption>
                <figcaption><a className="links"href={props.repoLink}>View Repository</a></figcaption>
            </figure>
    )
}

