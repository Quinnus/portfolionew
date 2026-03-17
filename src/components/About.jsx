import profilePic from '../assets/picsmall.png'
import './About.css'


export default function About() {

    return (
        <section id="aboutsection">
            <h2>A bit about me</h2>
            <p className="taglinetext">Tagline (TBC)</p>
            <img className="selfie-img" src={profilePic} alt="greyscale picture of John"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugait sunt enim reprehenderit accusam possim
                iure excepteur officia. Illum clita diam dolor liber fugiat ipsum sunt doming iure vulputate eros.
                Placerat exercitation suscipit nostrud, enim euismod zzril suscipit dolore velit sadipscing feugait stet
                accumsan</p>
        </section>
    )
}