import projects from "../data/projects.js";
import './Projects.css'


export default function Projects() {
    return (
        <section id="projectssection">
            {projects.map((p) => (
                <div key={p.id} className="projectcard">
                    <img className="project-img" src={p.image} alt="screenshot"/>
                    <p><strong>Project name: </strong> {p.name}</p>
                    <p><strong>Description: </strong>{p.desc}</p>
                    <p><strong>Tech stack: </strong>{p.stack.join(", ")}</p>
                    <p><strong>See it at: </strong>{p.url}</p>
                    <p><strong>Github: </strong>{p.github}</p>

                </div>))}
        </section>
    )

}