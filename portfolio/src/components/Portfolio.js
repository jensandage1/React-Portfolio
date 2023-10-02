import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Portfolio.css"
import socialWhiskers from "../utils/images/social-whiskers.png";
import newsCompiler from "../utils/images/news-compiler.png";
import textEditor from "../utils/images/jate-text-editor.png";
import noteTaker from "../utils/images/note-taker.png";
import weatherApp from "../utils/images/weather-app.png";
import portfolio from "../utils/images/non-react-portfolio.png";

export default function Portfolio(){
    return (
        <div className="portfolio-body">
           <h1 className="portfolio-title">Portfolio</h1>
           <div className="flex-container">
            <figure>
                <h3 className="app-title">Pet Adoption</h3>
                <img className="portfolio-img"src={socialWhiskers} alt="screenshot of Social Whiskers App"/>
                <figcaption><a className="links"href="https://social-whiskers-ad907fdaaf47.herokuapp.com/">View App</a></figcaption>
                <figcaption><a className="links"href="https://github.com/edwinalban/Social-Whiskers-Pet-Adoption">View Repository</a></figcaption>
            </figure>
            <figure>
                <h3 className="app-title">News Compiler</h3>
                <img className="portfolio-img"src={newsCompiler} alt="screenshot of News Compiler App"/>
                <figcaption><a className="links"href="https://jensandage1.github.io/News-API-app-with-Definition-Searching/">View App</a></figcaption>
                <figcaption><a className="links"href="https://github.com/jensandage1/News-API-app-with-Definition-Searching">View Repository</a></figcaption>
            </figure>
            <figure>
                <h3 className="app-title">Text Editor</h3>
                <img className="portfolio-img"src={textEditor} alt="screenshot of text editor App"/>
                <figcaption><a className="links"href="https://jate-text-editor-mod-19-41afa2aa7929.herokuapp.com/">View App</a></figcaption>
                <figcaption><a className="links"href="https://github.com/jensandage1/Progressive-Web-App-Text-Editor">View Repository</a></figcaption>
            </figure>
            <figure>
                <h3 className="app-title">Note Taker</h3>
                <img className="portfolio-img"src={noteTaker} alt="screenshot of note taker App"/>
                <figcaption><a className="links"href="https://module-11-note-taker-challenge-7c52ae029d38.herokuapp.com/">View App</a></figcaption>
                <figcaption><a className="links"href="https://github.com/jensandage1/Module-11-Challenge-Note-Taker">View Repository</a></figcaption>
            </figure>
            <figure>
                <h3 className="app-title">Weather Dashboard</h3>
                <img className="portfolio-img"src={weatherApp} alt="screenshot of weather app"/>
                <figcaption><a className="links"href="https://jensandage1.github.io/module-6-challenge-weather-dashboard/">View App</a></figcaption>
                <figcaption><a className="links"href="https://github.com/jensandage1/module-6-challenge-weather-dashboard">View Repository</a></figcaption>
            </figure>
            <figure>
                <h3 className="app-title">Portfolio</h3>
                <img className="portfolio-img"src ={portfolio} alt="screenshot of non-React portfolio" />
                <figcaption><a className="links"href="https://jensandage1.github.io/module-2-challenge-portfolio/">View App</a></figcaption>
                <figcaption><a className="links"href="https://github.com/jensandage1/module-2-challenge-portfolio">View Repository</a></figcaption>
            </figure>
           </div>
        </div>
    );
}

