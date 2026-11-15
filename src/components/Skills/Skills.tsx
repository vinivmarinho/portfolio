import "./skills.css";
import { JavaScriptIcon, TypeScriptIcon, ReactIcon, NodeIcon, PostgreSqlIcon, GitIcon} from "../Icons/Icons";

export default function Skill() {
    return(
        <div className="skills-container">
            <h1 className="skills-title">Habilidades</h1>

            <div className="skills">
                <div className="skill-card">
                   <JavaScriptIcon />
                   <span>JavaScript</span>
                </div>

                <div className="skill-card">
                   <TypeScriptIcon />
                   <span>TypeScript</span>
                </div>

                <div className="skill-card">
                   <ReactIcon />
                   <span>React</span>
                </div>

                <div className="skill-card">
                   <NodeIcon />
                   <span>Node.js</span>
                </div>

                <div className="skill-card">
                   <PostgreSqlIcon />
                   <span>PostgreSQL</span>
                </div>

                 <div className="skill-card">
                   <GitIcon />
                   <span>Git</span>
                </div>
            </div>
        </div>
    )
}