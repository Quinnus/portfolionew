import projects from "../data/projects.js";
import './Projects.css'


export default function Projects() {
    return (

        <section id="projectssection">
            <div className="container">
                {projects.map((p, index) => (
                    <div key={p.id} className={index % 2 === 0 ? "card-left" : "card-right"}>
                        <img className="project-img" src={p.image} alt="screenshot"/>
                        <div className="card-content">

                            <p><strong>Project name: </strong> {p.name}</p>
                            <p><strong>Description: </strong>{p.desc}</p>

                            <p><strong>Try it out: </strong><a href={p.url} target="_blank"
                                                               rel="noopener noreferrer">{p.url}</a></p>
                            <p><strong>See the code: </strong><a href={p.github} target="_blank"
                                                                 rel="noopener noreferrer">{p.github}</a></p>
                            <div className="tech-stack">
                                {p.stack.map((t) =>
                                    (<span key={t}
                                           className="tech-badge">
                                        {t}
                                    </span>))}
                            </div>
                        </div>
                    </div>))}
            </div>
        </section>
    )

}