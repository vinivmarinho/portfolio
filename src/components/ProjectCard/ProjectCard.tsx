import "./projectcard.css";
type ProjectCard = {
    image: string,
    projectName: string,
    projectDescription: string,
    projectLink: string
}
export default function ProjectCard({
    image, 
    projectName, 
    projectDescription,
    projectLink 
}: ProjectCard) {
    return(
        <>
        <article className="project-card">

            <div className="project-preview">
                <img src={image} alt="" />
            </div>
            
            <div className="project-content">
                <h3 className="project-name">{projectName}</h3>

                <p>{projectDescription}</p>

                <a 
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                > Ver projeto <span>→</span></a>
            </div>
        </article>
        </>
    )
}