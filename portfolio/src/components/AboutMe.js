import '../styles/AboutMe.css'
import profilePicture from '../utils/images/jen.jpg'

export default function AboutMe(){
    
    return (
        <div className="about">
            <h1 id="about-me-title"> About Me </h1>
            <img src={profilePicture} alt="Jen Sandage"/>
            <p>I am an aspiring developer with a background in education and psychology. I spent the last several years working in schools. I developed art projects from the ground up, and managed their production through my students. I am looking for new career that will allow me to use my creativity and management skills as well as my new developer skills.</p>
        </div>
    );
}

//css for formatting