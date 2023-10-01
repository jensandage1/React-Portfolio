import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import './App.css';

export default function App() {
  return (
    <div>
        <Navbar />
        <Portfolio />
        <Footer />
    </div>
  )
}

//instead of about me, probably "body" or something and then have the default set ad about me
