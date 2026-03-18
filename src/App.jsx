import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
// import Contact from './contact/Contact.jsx'
import Navbar from './navbar/Navbar.jsx'
import Footer from "./footer/Footer.jsx";

function App() {

    return (
        <main>
            <Navbar/>
            <About id="aboutsection"/>
            <Projects id="projectssection"/>
            <Skills id="skillssection"/>
            <footer><Footer id="contactsection"/></footer>
        </main>


    )
}

export default App
