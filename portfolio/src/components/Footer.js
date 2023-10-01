import "../styles/Footer.css";
import Contact from "./Contact";

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/jensandage1">Github</a>
            <a href="https://www.linkedin.com/in/jennifer-sandage-469899130/">LinkedIn</a>
            <Contact />

        </div>
    )
}

//make the links look better with css
//sticky to the bottom of the page