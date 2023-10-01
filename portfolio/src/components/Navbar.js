import '../styles/Nav.css';

export default function Navbar() {
    return (
<div className= "nav">
    <h1>Jen Sandage</h1>
    <h2>About Me</h2>
    <h2>Portfolio</h2>
    <h2>Contact</h2>
    <h2>Resume</h2>
</div>
    );
}

//current sections needs to be highlighted when it's chosen
//when click on section, current body changes and highlighted nav changes
//sticky to the top of the page. 