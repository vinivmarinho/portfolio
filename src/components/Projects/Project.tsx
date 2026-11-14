import "./project.css";
import projeto1 from "../../assets/projeto1.png";
import projeto2 from "../../assets/projeto2.png";
export default function Project() {
    return(
        <div className="project-container">
            <h1 className="project-title">Projetos</h1>
           {/*  ===========================================
                Container de todos os cards
                ===========================================
            */}
            <div className="project-cards">
                {/* ===========================================
                    Primeiro projeto
                    ===========================================
                */}
                <article className="project-card">

                    <div className="project-preview">
                        <img src={projeto1} alt="" />
                    </div>
                    
                    <div className="project-content">
                        <h3 className="project-name">Gestão de alunos</h3>

                        <p> Sistema completo para gerenciar alunos, turmas e mensalidades.</p>

                        <a 
                        href="https://gestao-alunos.viniciusmarinho.dev.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        > Ver projeto <span>→</span></a>
                    </div>
                </article>

                {/* ===========================================
                    Segundo projeto
                    ===========================================
                */}
                <article className="project-card">

                    <div className="project-preview">
                        <img src={projeto2} alt="" />
                    </div>
                    
                    <div className="project-content">
                        <h3 className="project-name">Sistema de gestão de peças de crochê</h3>

                        <p> Sistema completo para gerenciar peças.</p>

                        <a 
                        href="https://mimos-crochet.vercel.app/catalog"
                        target="_blank"
                        rel="noopener noreferrer"
                        > Ver projeto <span>→</span></a>
                    </div>
                </article>

            </div>
        </div>
    )
}