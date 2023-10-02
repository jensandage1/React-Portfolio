import resume from '../utils/images/resume.png';
import resumePdf from '../utils/files/resume.pdf';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Resume.css";

export default function Resume(){
    return (
        <div className="resume-page">
            <h1 className="resume-title">Resume</h1>
        <div className="resume-body">
            <div className="resume-card">
                <img id="resume-pdf" src={resume} alt="resume" />
                <a className="download" href={resumePdf} download> Download Resume</a>
            </div>
            <div className="prof-card">
                <h2 className="proficiencies">Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            </div>
        </div>
    );
}

//link to downloadable resume
//image of resume? 
//list of proficiencies 