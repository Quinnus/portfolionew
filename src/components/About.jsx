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
                            <p className="taglinetext">I used to have a corporate job. Now I do web and software
                                development.</p>

                        </div>
                        <div className="pic-mobile">
                            <img id="selfie-small" src={profilePic} alt="greyscale picture of John"/>
                        </div>
                        <p>Hey, thanks for stopping by my site. I'm a recently graduated full-stack* software
                            developer,
                            based in Dublin, Ireland. In a previous life I spend over 20 years working in a large
                            multinational. However computer, programming and the web have always been a hobby. So when
                            the oppportunity arose to take a different path, I jumped at it. Have a look at some of my
                            work below.
                        </p>
                        <p className="taglinetext">*that means the fancy bit (web-pages) and the techy bit (behind the
                            scenes)</p>
                    </div>
                </div>
            </div>
        </section>


    )
}