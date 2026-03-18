import profilePic from '../assets/me2.png'
import './About.css'


export default function About() {

    return (

        <section id="aboutsection">
            <div className="container">
                <h1>A bit about me</h1>

                <div className="about-me">
                    <div className="profile-image">
                        <img id="selfie-img" src={profilePic} alt="greyscale picture of John"/>
                    </div>
                    <div className="profile-text">
                        <div className="intro-me">
                            <p className="taglinetext">Feugait sunt enim reprehenderit accusam possim iure excepteur
                                officia.
                                Illum
                                clita diam dolor liber fugiat ipsum sunt doming iure vulputate eros.</p>
                        </div>
                        <div className="pic-mobile">
                            <img id="selfie-small" src={profilePic} alt="greyscale picture of John"/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugait sunt enim reprehenderit
                            accusam
                            possim
                            iure excepteur officia. Illum clita diam dolor liber fugiat ipsum sunt doming iure vulputate
                            eros.
                            Placerat exercitation suscipit nostrud, enim euismod zzril suscipit dolore velit sadipscing
                            feugait
                            stet
                            accumsan
                        </p>
                    </div>
                </div>
            </div>
        </section>


    )
}