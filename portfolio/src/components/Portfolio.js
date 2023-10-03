import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Portfolio.css"
import socialWhiskers from "../utils/images/social-whiskers.png";
import newsCompiler from "../utils/images/news-compiler.png";
import textEditor from "../utils/images/jate-text-editor.png";
import noteTaker from "../utils/images/note-taker.png";
import weatherApp from "../utils/images/weather-app.png";
import portfolio from "../utils/images/non-react-portfolio.png";
import PortfolioCards from "./PortfolioCards";

const social = {
    title: 'Social Whiskers',
    image: socialWhiskers,
    appLink: "https://social-whiskers-ad907fdaaf47.herokuapp.com/",
    repoLink: "https://github.com/edwinalban/Social-Whiskers-Pet-Adoption",
};

const news = {
    title: "News Compiler",
    image: newsCompiler,
    appLink:"https://jensandage1.github.io/News-API-app-with-Definition-Searching/",
    repoLink:"https://github.com/jensandage1/News-API-app-with-Definition-Searching",
};

const editor = {
    title: "Text Editor",
    image: textEditor,
    appLink: "https://jate-text-editor-mod-19-41afa2aa7929.herokuapp.com/",
    repoLink:"https://github.com/jensandage1/Progressive-Web-App-Text-Editor",
};

const notes = {
    title: "Note Taker",
    image: noteTaker,
    appLink: "https://module-11-note-taker-challenge-7c52ae029d38.herokuapp.com/",
    repoLink: "https://github.com/jensandage1/Module-11-Challenge-Note-Taker",
};

const weather = {
    title: "Weather Dashboard",
    image: weatherApp,
    appLink: "https://jensandage1.github.io/module-6-challenge-weather-dashboard/",
    repoLink: "https://github.com/jensandage1/module-6-challenge-weather-dashboard",
};

const port = {
    title: "Portfolio",
    image: portfolio,
    appLink: "https://jensandage1.github.io/module-2-challenge-portfolio/",
    repoLink: "https://github.com/jensandage1/module-2-challenge-portfolio",
};


export default function Portfolio(){
    return (
        <div className="portfolio-body">
           <h1 className="portfolio-title">Portfolio</h1>
           <div className="flex-container">
            <PortfolioCards title={social.title} image={social.image} appLink={social.appLink} repoLink={social.repoLink} />
            <PortfolioCards title={news.title} image={news.image} appLink={news.appLink} repoLink={news.repoLink} />
            <PortfolioCards title={editor.title} image={editor.image} appLink={editor.appLink} repoLink={editor.repoLink} />
            <PortfolioCards title={notes.title} image={notes.image} appLink={notes.appLink} repoLink={notes.repoLink} />
            <PortfolioCards title={weather.title} image={weather.image} appLink={weather.appLink} repoLink={weather.repoLink} />
            <PortfolioCards title={port.title} image={port.image} appLink={port.appLink} repoLink={port.repoLink} />
           </div>
        </div>
    );
}

