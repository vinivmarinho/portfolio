import "./project.css";
import projeto1 from "../../assets/projeto1.png";
import projeto2 from "../../assets/projeto2.png";
import ProjectCard from "../ProjectCard/ProjectCard";
export default function Project() {
    return(
        <div className="project-container" id="projects">
            <h1 className="project-title">Projetos</h1>
           {/*  ===========================================
                Container de todos os cards
                ===========================================
            */}
            <div className="project-cards">
                <ProjectCard 
                image={projeto1}
                projectName="Gestão de Alunos"
                projectDescription="Aplicação Full Stack para gestão de alunos, turmas e mensalidades."
                projectLink="https://gestao-alunos.viniciusmarinho.dev.br/"
                />

                <ProjectCard 
                image={projeto2}
                projectName="Crochê - Catálogo e Gestão de Produtos"
                projectDescription="Aplicação Full Stack com catálogo digital e painel administrativo para gerenciamento de peças artesanais."
                projectLink="https://mimos-crochet.vercel.app/catalog"
                />
            </div>
        </div>
    )
}