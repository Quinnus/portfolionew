import projects from "../data/projects.js";
import './Projects.css'
import {motion} from 'framer-motion'


export default function Projects() {
    return (

        <section id="projectssection">
            <div className="container">
                {projects.map((p, index) => (
                    <motion.div key={p.id}
                                className={index % 2 === 0 ? "card-left" : "card-right"}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.4, delay: index * 0.15}}
                    >
                        <img className="project-img" src={p.image} alt="screenshot"/>
                        <div className="card-content">

                            <p className="projectname"><strong>Project name: </strong> {p.name}</p>
                            <p><strong>Description: </strong>{p.desc}</p>

                            {/*<p><strong>Try it out: </strong><a href={p.url} target="_blank"*/}
                            {/*                                   rel="noopener noreferrer">{p.url}</a></p>*/}
                            {/*<p><strong>See the code: </strong><a href={p.github} target="_blank"*/}
                            {/*                                     rel="noopener noreferrer">{p.github}</a></p>*/}
                            <div className="tech-stack">
                                {p.stack.map((t) =>
                                    (<span key={t}
                                           className="tech-badge">
                                        {t}
                                    </span>))}
                            </div>
                        </div>
                    </motion.div>))}
            </div>
        </section>
    )

}